const parser = require('../lib/parser.js');
const expect = require('expect');

var checkedTypes = {
  VariableDeclaration: false,
  ForStatement: false,
  ForInStatement: false,
  ForOfStatement: false,
  WhileStatement: false,
  DoWhileStatement: false,
  BreakStatement: false,
  ReturnStatement: false,
  YieldExpression: false,
  FunctionDeclaration: false,
  FunctionExpression: false,
  ArrowFunctionExpression: false,
  CallExpression: false,
  IfStatement: false,
  extra: 0, // this catches if we're examining ast types that we're not testing for
};

describe('Backend', () => {
  describe('#parser', () => {
    it('parser should exist', () => {
      expect(parser.parser).toBeA(Function);
    });
  });
  describe('#parser\'s helper functions', () => {
    describe('::types', () => {
      it('types array should exist', () => {
        expect(parser.tester.types).toBeAn(Array);
      });
      it('types array includes 14 types', () => {
        expect(parser.tester.types.length).toEqual(14);
      });
      var theType;
      parser.tester.types.forEach((type) => {
        theType = type.type;
        if (checkedTypes.hasOwnProperty(theType)) {
          checkedTypes[theType] = true;
        } else {
          checkedTypes.extra++;
        }
      });
      it('those 14 types being the 14 we plan to check for', () => {
        var allKeys = true;
        for (var keys in checkedTypes) {
          allKeys = keys && allKeys;
        }

        expect(allKeys).toBe(true);
      });
      it('and all types we\'re checking for are also being tested', () => {
        expect(checkedTypes.extra).toEqual(0);
      });
    });
    describe('#query', () => {
      it('query helper should exist', () => {
        expect(parser.tester.query).toBeA(Function);
      });
    });
    describe('#functionParameterParse', () => {
      it('functionParameterParse helper should exist', () => {
        expect(parser.tester.functionParameterParse).toBeA(Function);
      });
    });
    describe('#variableKindParse', () => {
      it('variableKindParse helper should exist', () => {
        expect(parser.tester.variableKindParse).toBeA(Function);
      });
    });
    describe('#variableNameParse', () => {
      it('variableNameParse helper should exist', () => {
        expect(parser.tester.variableNameParse).toBeA(Function);
      });
    });
    describe('#parseFunction', () => {
      it('parseFunction helper should exist', () => {
        expect(parser.tester.parseFunction).toBeA(Function);
      });
    });
    describe('#asyncTasks', () => {
      it('asyncTasks builder helper should return an Array', () => {
        expect(parser.tester.asyncTasks).toBeAn(Array);
      });
      it('asyncTasks array members should each be functions', () => {
        parser.tester.asyncTasks.forEach((el) => {
          expect(el).toBeA(Function);
        });
      });
    });
  })
});
