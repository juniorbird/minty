const parser = require('../lib/parser.js');
const expect = require('expect');

/*
HOWTO: add a new checked node type
1. Add a new key with the name of the node type, e.g. MyNode:
2. Give that key the value of { found: false, hasCallbacks: 0 }
3. If that node type has callbacks to record data, provide the expected # of callbacks
    e.g. expectedCallbacks: 1
4. add the key:value pair hasCallbacks: false, to help the test
*/
var checkedTypes = {
  VariableDeclaration: { found: false, expectedCallbacks: 2, hasCallbacks: false, },
  ForStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  ForInStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  ForOfStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  WhileStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  DoWhileStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  BreakStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  ReturnStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  YieldExpression:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  FunctionDeclaration:  { found: false, expectedCallbacks: 2, hasCallbacks: false, },
  FunctionExpression:  { found: false, expectedCallbacks: 1, hasCallbacks: false, },
  ArrowFunctionExpression:  { found: false, expectedCallbacks: 1, hasCallbacks: false, },
  CallExpression:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  IfStatement:  { found: false, expectedCallbacks: 0, hasCallbacks: false, },
  extra: 0, // this catches if we're examining ast types that we're not testing for
};

var allKeys = true; // Mocha apparently prefers globals
var allCallbacks = true; // dangerous defaults!

describe('Backend', () => {
  describe('#parser', () => {
    it('parser should exist', () => {
      expect(parser.parser).toBeA(Function);
    });
  });
  describe('#parser\'s helper functions', () => {
    describe('::types', () => {
      before(function () {
        // Set up by checking types
        var theType;
        var cbCount;
        parser.tester.types.forEach((type) => {
          theType = type.type;
          if (checkedTypes.hasOwnProperty(theType)) {
            checkedTypes[theType].found = true;
          } else {
            checkedTypes.extra++;
          }

          cbCount = type.callbacks.length;
          if (cbCount === checkedTypes[theType].expectedCallbacks) {
            checkedTypes[theType].hasCallbacks = true;
          }
        });

        // console.log(checkedTypes);

        for (var keys in checkedTypes) {
          // console.log(keys);
          // console.log(checkedTypes.keys.found);
          allKeys = (keys !== 'extra') ?  checkedTypes[keys].found && allKeys : allKeys;
          allCallbacks = (keys !== 'extra') ?  checkedTypes[keys].hasCallbacks && allCallbacks : allCallbacks;
        }

        // console.log('allKeys', allKeys);
      });

      it('types array should exist', () => {
        expect(parser.tester.types).toBeAn(Array);
      });

      it('types array includes 14 types', () => {
        expect(parser.tester.types.length).toEqual(14);
      });

      it('those 14 types being the 14 we plan to check for', () => {
        expect(allKeys).toBe(true);
      });

      it('and all types we\'re checking for are also being tested', () => {
        expect(checkedTypes.extra).toEqual(0);
      });

      it('the types we\'re checking have the correct number of callbacks', () => {
        expect(allCallbacks).toBe(true);
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
