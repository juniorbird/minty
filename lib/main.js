const tutor = require('./utils.js');
const async = require('async');



async.waterfall([
    async.apply(tutor.read, 'test.js'),
    tutor.splitFile,
    tutor.injectCheckCode,
    tutor.run
  ]);
