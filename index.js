const parser = require('./lib/parser.js').parser;
const ruler = require('./lib/createLineRules.js');
const inject = require('./lib/injector.js');
const run = require('./lib/run.js');
const fs = require('fs');
const Promise = require('bluebird');

const minty = {};

/*path is the path users provide
so JSTEXT takes the file and reads all the contents
*/
function file(path) {
  const JSTEXT = fs.readFileSync(path).toString();
  const parsed = parser(JSTEXT);
  const rules = ruler(parsed);
  const injected = inject(rules, JSTEXT);
  run.runFile(injected, path, JSTEXT);
  return;
}

function wrap(func) {
  const JSTEXT = func.toString();
  const parsed = parser(JSTEXT);
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




module.exports = minty;
