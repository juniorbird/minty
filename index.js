const utils = require('./lib/utils.js');
const async = require('async');
const Promise = require('bluebird');


var minty = {};

function file(path) {
  async.waterfall([
    async.apply(utils.read, path),
    utils.splitFile,
    utils.injectCheckCode,
    utils.run
  ]);
}

function wrap(func) {

}


minty.file = Promise.promisify(file);

minty.wrap = func => {
 var test = utils.splitFile(func.toString(), null);
 return test;
};


module.exports = minty;
