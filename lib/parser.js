'use strict';

const fs = require('fs');
const acorn = require('acorn');
const esquery = require('esquery');
const async = require('async');


const types = [
  {
    type: 'VariableDeclaration',
    callbacks: [[variableKindParse, 'kind'], [variableNameParse, 'variables']],
  },
  { type: 'ForStatement', callbacks: null },
  { type: 'ForInStatement', callbacks: null },
  { type: 'ForOfStatement', callbacks: null },
  { type: 'WhileStatement', callbacks: null },
  { type: 'DoWhileStatement', callbacks: null },
  { type: 'BreakStatement', callbacks: null },
  { type: 'ReturnStatement', callbacks: null },
  { type: 'YieldExpression', callbacks: null },
  {
    type: 'FunctionDeclaration',
    callbacks: [[functionParameterParse, 'parameters'], [functionNameParse, 'name']],
  },
  {
    type: 'FunctionExpression',
    callbacks: [[functionParameterParse, 'parameters']],
  },
  {
    type: 'ArrowFunctionExpression',
    callbacks: [[functionParameterParse, 'parameters']],
  },
  { type: 'CallExpression', callbacks: null },
  { type: 'IfStatement', callbacks: null },
  { type: 'SwitchStatement', callbacks:[[null, null], [switchCaseParse, 'cases']] },
];


const cache = {};
const tokens = [];
let ast;

/**
 * function to parse through ast and return desired information based off search parameter
 * @param string - search term, i.e. '[attr="foo"]'
 * @param AST - AST that will be searched. Did not call param 'ast' as
 *              that variable has been used already
 **/
function query(string, AST) {
  const parseInformation = esquery.parse(string);
  return esquery.match(AST, parseInformation);
}

/**
function parses ast and finds all function declarations, adding parameters
**/
function functionParameterParse(node) {
  return node.params.map(paramsObj => paramsObj.name);
}

function functionNameParse(node) {
  return node.id.name;
}
function variableKindParse(node) {
  return node.kind;
}

function variableNameParse(node) {
  return node.declarations.map(dec => dec.id.name);
}

function switchCaseParse(node) {
  return node.cases.map(elem => {
    return {startLine: elem.loc.start.line, endLine: elem.loc.end.line};
  });
}
/**
 * function parses ast and finds all searchString nodes, runs callbacks after
 * @param searchString - finds all nodes with this string via esquery
 * @param callbacks - array with nested arrays [[function, logName], ...], logs extra parameters
 **/
function parseFunction(searchString, callbacks) {
  if (!cache[searchString]) cache[searchString] = [];
  const output = query(`[type=${searchString}]`, ast);

  // Tempting to use map and concat but seems like push is faster
  //  http://jsperf.com/multi-array-concat/7
  output.forEach(node => {
    cache[searchString].push({
      startLine: node.loc.start.line,
      endLine: node.loc.end.line,
    });

    if (callbacks) {
      callbacks.forEach(cbArray => {
        if (cbArray[0]) {
          const name = cbArray[1];
          const func = cbArray[0];
          const extraOutput = func(node);
          cache[searchString][cache[searchString].length - 1][name] = extraOutput;
        }
      });
    }
  });
}

/**
run through all parsing information on load
**/
const asyncTasks = types.map(function (el) {
  return parseFunction.bind(this, el.type, (el.callbacks || null));
});


function parser(filename) {
  ast = acorn.parse(fs.readFileSync(filename), {
    locations: true,
    onToken: tokens,
  });
  // console.log(JSON.stringify(ast));
  async.parallel(asyncTasks);
  return cache;
}



module.exports = parser;
