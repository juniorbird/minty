const parser = require('./lib/parser.js');
const ruler = require('./lib/createLineRules.js');
const inject = require('./lib/injector.js');

var minty = {};

minty.file = function file(path) {
  const parsed = parser(path);
  const rules = ruler(parsed);
  console.log(JSON.stringify(rules));
};

minty.wrap = function wrap(func) {

};

module.exports = minty;
