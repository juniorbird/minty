const parser = require('./lib/parser.js').parser;
const ruler = require('./lib/createLineRules.js');
const inject = require('./lib/injector.js');
const run = require('./lib/run.js');
const fs = require('fs');

const minty = {};

minty.file = function file(path) {
  const JSTEXT = fs.readFileSync(path);
  const parsed = parser(JSTEXT);
  const rules = ruler(parsed);
  const injected = inject(rules, JSTEXT);
  run(injected, path);
};

minty.wrap = function wrap(func) {

};

minty.file('lib/test.js');

module.exports = minty;
