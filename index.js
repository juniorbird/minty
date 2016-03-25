const parser = require('./lib/parser.js').parser;
const ruler = require('./lib/createLineRules.js');
const inject = require('./lib/injector.js');

var minty = {};

minty.file = function file(path) {
  const parsed = parser(path);
  // const rules = ruler(parsed);
  // const injected = inject(parsed, path);
  // console.log(injected)
  console.log(parsed);
};

minty.wrap = function wrap(func) {

}

module.exports = minty;
