const parser = require('./lib/parser.js').parser;
const ruler = require('./lib/createLineRules.js');
const inject = require('./lib/injector.js');
const run = require('./lib/run.js');
const anonFunc = require('./lib/anonFuncHandler.js')
const fs = require('fs');

const minty = {};

/**
* reads the file the user provides, creates an abstract syntax tree, creates rules, injects monitoring code based on rules, generates html file for user
* @param {file path to file user wants us to analyze} path
**/
function file(path) {
  const JSTEXT = fs.readFileSync(path).toString();
  const parsed = parser(JSTEXT);
  const rules = ruler(parsed);
  const injected = inject(rules, JSTEXT);
  run.runFile(injected, path, JSTEXT);
  return;
}

/**
* turns function to a string, turns function into abstract syntax tree, create rules for where to inject code, inject the monitoring code into user's function,
**/
function wrap(func) {
  const JSTEXT = func.toString();
  const checkFuncText = anonFunc(JSTEXT);
  const parsed = parser(checkFuncText);
  const rules = ruler(parsed);
  const injected = inject(rules, JSTEXT);
  const mintified = run.wrap(injected, JSTEXT);
  return function() {
    const args = Array.prototype.slice.call(arguments);
    mintified.apply(null, args);
  };
}

minty.file = file;
minty.wrap = wrap;

// file('/Users/AngieYeh/lumpy-turnips/lib/test.js')

module.exports = minty;
