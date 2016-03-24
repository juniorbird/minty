const fs = require('fs');
const acorn = require('acorn');
const esquery = require('esquery');
const async = require('async');
const filename = './test.js';
const tokens = [];
const cache = {
  ForStatement: [],
  WhileStatement: [],
  DoWhileStatement: [],
  BreakStatement: [],
  ForInStatement: [],
  ReturnStatement: [],
  FunctionDeclaration: [],
  FunctionExpression: [],
  ArrowFunctionExpression: [],
  GeneratorExpression: [],
};

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
  variablesAST.forEach(val => {
    variableNames.push(val.id.name);
  });
  return variableNames;
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
  output.forEach(node => {
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
async.parallel([
  parseFunction.bind(this, 'ForStatement', [[forLoopParse, 'variables']]),
  parseFunction.bind(this, 'ForInStatement', [[forLoopParse, 'variables']]),
  parseFunction.bind(this, 'WhileStatement', null),
  parseFunction.bind(this, 'DoWhileStatement', null),
  parseFunction.bind(this, 'BreakStatement', null),
  parseFunction.bind(this, 'ReturnStatement', null),
  parseFunction.bind(this, 'FunctionDeclaration', [[functionParse, 'parameters']]),
  parseFunction.bind(this, 'FunctionExpression', [[functionParse, 'parameters']]),
  parseFunction.bind(this, 'ArrowFunctionExpression', [[functionParse, 'parameters']]),
  parseFunction.bind(this, 'GeneratorExpression', [[functionParse, 'parameters']]),
]);

console.log(JSON.stringify(cache));
