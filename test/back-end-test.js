const parser = require('../lib/parser.js');
const expect = require('expect');


describe('Backend', () => {
  describe('#parser', () => {
    it('parser should exist', () => {
      expect(parser).toBeA(Function);
    });
  });
});
