const createLR = require('./../../lib/createLineRules.js')
const expect = require('expect');
console.log(createLR.ruler)

describe('Create line rules file', () => {
  describe('ruler', () => {
    it('should be a function', () => {
      expect(createLR.ruler).toBeA(Function);
    });
  });
  describe('addlines', () => {
    it('should be a function', () => {
      expect(createLR.addLines).toBeA(Function);
    })
  });
  describe('addVariables', () => {
    it('should be a function', () => {
      expect(createLR.addVariables).toBeA(Function);
    })
  });
  describe('addScopeName', () => {
    it('should be a function', () => {
      expect(createLR.addScopeName).toBeA(Function);
    })
  });
});
