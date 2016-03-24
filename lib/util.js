const fs = require('fs');
const acorn = require('acorn');
const esquery = require('esquery');
const async = require('async');
const filename = './test.js';
const tokens = [];

const types = [
  { type: 'ForStatement', callbacks: [[forLoopParse, 'variables']] },
  { type: 'WhileStatement', callbacks: [[forLoopParse, 'variables']] },
  { type: 'DoWhileStatement', callbacks: null },
  { type: 'BreakStatement', callbacks: null },
  { type: 'ForInStatement', callbacks: [[forLoopParse, 'variables']] },
  { type: 'ReturnStatement', callbacks: null },
  { type: 'FunctionDeclaration', callbacks: [[functionParse, 'parameters']] },
  { type: 'FunctionExpression', callbacks: [[functionParse, 'parameters']] },
  { type: 'ArrowFunctionExpression', callbacks: [[functionParse, 'parameters']] },
  { type: 'GeneratorExpression', callbacks: [[functionParse, 'parameters']] },
];

const cache = {};

const ast = acorn.parse(fs.readFileSync(filename), {
  locations: true,
  onToken: tokens,
});

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
function parses ast and finds all for statements, adding start/end lines, and variables declared
**/
function forLoopParse(node) {
  const variableNames = [];
  const variablesAST = query('[type=VariableDeclarator]', node);
  return variablesAST.map(val => val.id.name);
}

/**
function parses ast and finds all function declarations, adding parameters
**/
function functionParse(node) {
  return node.params.map(paramsObj => paramsObj.name);
}

/**
function parses ast and finds all while statements, adding their start and end lines to cache
**/
function parseFunction(searchString, callbacks) {
  const output = query(`[type=${searchString}]`, ast);

  // Tempting to use map and concat but seems like push is faster
  //  http://jsperf.com/multi-array-concat/7
  output.forEach(node => {
    if (!cache[searchString]) cache[searchString] = [];

    cache[searchString].push({
      startLine: node.loc.start.line,
      endLine: node.loc.end.line,
    });

    if (callbacks) {
      callbacks.forEach(cbArray => {
        const name = cbArray[1];
        const func = cbArray[0];
        const extraOutput = func(node);
        cache[searchString][cache[searchString].length - 1][name] = extraOutput;
      });
    }
  });
}

/**
run through all parsing information on load
**/
// const _this = this;
//
var asyncTasks = types.map(function (el) {
  return parseFunction.bind(this, el.type, (el.callbacks || null));
});

async.parallel(asyncTasks);

console.log(JSON.stringify(cache));
