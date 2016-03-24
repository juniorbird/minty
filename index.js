const parser = require('./lib/parser.js');
const inject = require('./lib/inject.js')

var minty = {};

minty.file = function file(path) {
  const parsed = parser(path);
  // const injected = inject(parsed);
  console.log(parsed)
};

minty.wrap = function wrap(func) {

}

module.exports = minty;
