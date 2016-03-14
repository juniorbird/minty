const minty = require('./utils.js');
const async = require('async');


module.exports = file => {
  async.waterfall([
    async.apply(minty.read, file),
    minty.splitFile,
    minty.injectCheckCode,
    minty.run
  ]);
};
