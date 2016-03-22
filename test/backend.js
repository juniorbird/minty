const expect = require('expect');
const utils = require('../lib/utils.js');
const path = require('path');
const mediumFilePre = "var one = 'Greetings';\nvar two = 'Programs';\n\nvar three = 'Positive and negative, huh? You are a Bit.';";
const mediumFilePost = [ 'var one = \'Greetings\';',
  'var two = \'Programs\';',
  '',
  'var three = \'Positive and negative, huh? You are a Bit.\';' ]

describe('Backend', function() {
  describe('#splitFile', function() {
    it('should split files given a filename', function() {
      expect(utils.splitFile(mediumFilePre), 'medium.js')
      .toEqual(mediumFilePost);
    });
    it('should split files without a filename', function() {
      expect(utils.splitFile(mediumFilePre))
      .toEqual("['var one = \'Greetings\';', 'var two = \'Programs\';', '', 'var three = \'Positive and negative, huh? You are a Bit.\';']");
    });
  });
});
