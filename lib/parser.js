'use strict';

const esprima = require('esprima');
const esquery = require('esquery');
const parseutils = {};
let ast;

/**
 * function to parse through ast and return desired information based off search parameter
 * @param string - search term, i.e. '[attr="foo"]'
 * @param AST - AST that will be searched. Did not call param 'ast' as
 *              that variable has been used already
 **/
parseutils.query = function (string, AST) {
  const parseInformation = esquery.parse(string);
  return esquery.match(AST, parseInformation);
};

/**
function parses ast and finds all function declarations, adding parameters
**/
parseutils.functionParameterParse = function (node) {
  return node.params.map(paramsObj => paramsObj.name);
};

parseutils.functionNameParse = function (node) {
  return node.id.name;
};

parseutils.variableKindParse = function (node) {
  return node.kind;
};

parseutils.variableNameParse = function (node) {
  return node.declarations.map(dec => dec.id.name);
};

parseutils.assignmentExpParse = function (node) {
  return node.left.name;
};


const types = [
  {
    type: 'VariableDeclaration',
    callbacks: [[parseutils.variableKindParse, 'kind'],
      [parseutils.variableNameParse, 'variables']],
  },
  { type: 'ForStatement', callbacks: null },
  { type: 'ForInStatement', callbacks: null },
  { type: 'ForOfStatement', callbacks: null },
  { type: 'WhileStatement', callbacks: null },
  { type: 'DoWhileStatement', callbacks: null },
  { type: 'SwitchStatement', callbacks: null },
  { type: 'SwitchCase', callbacks: null },
  { type: 'IfStatement', callbacks: null },
  { type: 'BreakStatement', callbacks: null },
  { type: 'ReturnStatement', callbacks: null },
  { type: 'YieldExpression', callbacks: null },
  { type: 'CallExpression', callbacks: null },
  {
    type: 'FunctionDeclaration',
    callbacks: [[parseutils.functionParameterParse, 'parameters'],
      [parseutils.functionNameParse, 'name']],
  },
  {
    type: 'FunctionExpression',
    callbacks: [[parseutils.functionParameterParse, 'parameters']],
  },
  {
    type: 'ArrowFunctionExpression',
    callbacks: [[parseutils.functionParameterParse, 'parameters']],
  },
];

/**
 * function parses ast and finds all searchString nodes, runs callbacks after
 * @param searchString - finds all nodes with this string via esquery
 * @param callbacks - array with nested arrays [[function, logName], ...], logs extra parameters
 **/
function parseFunction(searchString, callbacks) {
  if (!parseutils.cache[searchString]) parseutils.cache[searchString] = [];
  const output = parseutils.query(`[type=${searchString}]`, ast);

  // Tempting to use map and concat but seems like push is faster
  //  http://jsperf.com/multi-array-concat/7
  output.forEach(node => {
    parseutils.cache[searchString].push({
      startLine: node.loc.start.line,
      endLine: node.loc.end.line,
    });

    if (callbacks) {
      callbacks.forEach(cbArray => {
        const name = cbArray[1];
        const func = cbArray[0];
        const extraOutput = func(node);
        parseutils.cache[searchString][parseutils.cache[searchString].length - 1][name]
          = extraOutput;
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

function parser(text) {
  parseutils.cache = {};
  parseutils.tokens = [];

  ast = esprima.parse(text, {
    loc: true,
    onToken: parseutils.tokens,
  });

  asyncTasks.forEach(func => {
    func();
  });
  return parseutils.cache;
}

// const JSTEXT = fs.readFileSync('./test.js');
// const parsed = parser(JSTEXT);
// console.log('parsed', parsed)

module.exports = {
  parser: parser,
  parseutils: parseutils,
  types: types,
};
