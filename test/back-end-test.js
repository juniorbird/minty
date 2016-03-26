const parser = require('../lib/parser.js');
const expect = require('expect');
const sinon = require('sinon');

// Fixtures
const astFixtures = require('./fixtures/ast-fixtures.js').asts;
const largeast = require('./fixtures/largeAST.js')[0];
const queryResultSimple = require('./fixtures/queryResult-simple.js');

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
  SwitchStatement: { found:false, expectedCallbacks: 0, hasCallbacks: false, },
  SwitchCase: { found:false, expectedCallbacks: 0, hasCallbacks: false, },
  AssignmentExpression: { found:false, expectedCallbacks: 1, hasCallbacks: false, },
  extra: 0, // this catches if we're examining ast types that we're not testing for
};

var allKeysPresent = true; // Mocha apparently prefers globals
var allCallbacksPresent = true; // dangerous defaults!
var allCallbackContainer = [];
var allCallbacksFunctions = true;

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

        parser.types.forEach((type) => {
          // Check that we're checking for all the node types we expect
          theType = type.type;
          if (checkedTypes.hasOwnProperty(theType)) {
            checkedTypes[theType].found = true;

            // Check that we have callbacks where expected
            cbCount = (type.callbacks) ? type.callbacks.length : 0;
            if (cbCount === checkedTypes[theType].expectedCallbacks) {
              checkedTypes[theType].hasCallbacks = true;
            }

            // Grab those callbacks so that we can later test they exist
            if (type.callbacks && (type.callbacks.length > 0)) {
              type.callbacks.forEach((cb) => {
                allCallbackContainer.push(cb[0]);
              });
            }
          } else {
            // And that we're not checking for more node types
            checkedTypes.extra++;
          }
        });
        for (var keys in checkedTypes) {
          allKeysPresent = (keys !== 'extra') ?  checkedTypes[keys].found && allKeysPresent : allKeysPresent;
          allCallbacksPresent = (keys !== 'extra') ?  checkedTypes[keys].hasCallbacks && allCallbacksPresent : allCallbacksPresent;
        }
      });

      it('types array should exist', () => {
        expect(parser.parseutils.types).toBeAn(Array);
      });
      it('types array includes the expected number of types', () => {
        expect(parser.parseutils.types.length).toEqual(Object.keys(checkedTypes).length - 1);
      });
      it('those types being the ones we plan to check for', () => {
        expect(allKeysPresent).toBe(true);
      });
      it('and all types we\'re checking for are also being tested', () => {
        expect(checkedTypes.extra).toEqual(0);
      });
      it('the types we\'re checking have the correct number of callbacks', () => {
        expect(allCallbacksPresent).toBe(true);
      });
      it('the callbacks are actually functions', () => {
        allCallbackContainer.forEach((cb) => {
          expect(cb).toBeA(Function);
        });
      });
    });

    describe('#query', () => {
      it('query helper should exist', () => {
        expect(parser.parseutils.query).toBeA(Function);
      });
      it('query helper should execute a query correctly', () => {
        expect(parser.parseutils.query('[type="FunctionDeclaration"]', largeast).length).toEqual(3);
      });
    });

    describe('#functionParameterParse', () => {
      it('functionParameterParse helper should exist', () => {
        expect(parser.parseutils.functionParameterParse).toBeA(Function);
      });
      it('functionParameterParse should return an array of parameters, where there are parameters', () => {
        expect(parser.parseutils.functionParameterParse(astFixtures.FunctionDeclaration)).toEqual([ 'whats', 'that' ]);
      });
      it('functionParameterParse should return an empty array, with no parameters', () => {
        expect(parser.parseutils.functionParameterParse(astFixtures.FunctionExpression)).toEqual([]);
      });
    });

    describe('#variableKindParse', () => {
      it('variableKindParse helper should exist', () => {
        expect(parser.parseutils.variableKindParse).toBeA(Function);
      });
      it('variableKindParse helper should recognize vars', () => {
        expect(parser.parseutils.variableKindParse(astFixtures.VariableDeclaration.Var)).toEqual('var');
      });
      it('variableKindParse helper should recognize lets', () => {
        expect(parser.parseutils.variableKindParse(astFixtures.VariableDeclaration.Let)).toEqual('let');
      });
      it('variableKindParse helper should recognize consts', () => {
        expect(parser.parseutils.variableKindParse(astFixtures.VariableDeclaration.Const)).toEqual('const');
      });
    });

    describe('#variableNameParse', () => {
      it('variableNameParse helper should exist', () => {
        expect(parser.parseutils.variableNameParse).toBeA(Function);
      });
      it('variableNameParse helper should grab the name of a function', () => {
        expect(parser.parseutils.variableNameParse(astFixtures.VariableDeclaration.Var)).toEqual([ 'who' ]);
      });
    });

    describe('#parseFunction', () => {
      it('parseFunction helper should exist', () => {
        expect(parser.parseutils.parseFunction).toBeA(Function);
      });

      it('parseFunction should return a cache with the number of expected nodes, when the node type is not in the cache ', () => {
        var query = sinon.stub(parser.parseutils.query);
      console.log('hello');
        query.returns(queryResultSimple);
        console.log('query', query());
        expect(parser.parseutils.parseFunction('foo')).toEqual(47);
      });
      it('parseFunction should return a cache with the number of expected nodes, when the node type is in the cache', () => {
        expect(parser.parseutils.parseFunction).toBeA(Function);
      });
      it('parseFunction should return a cache with the number of expected nodes, and their callback values', () => {
        expect(parser.parseutils.parseFunction).toBeA(Function);
      });
    });

    describe('#asyncTasks', () => {
      it('asyncTasks builder helper should return an Array', () => {
        expect(parser.parseutils.asyncTasks).toBeAn(Array);
      });
      it('asyncTasks array members should each be functions', () => {
        parser.parseutils.asyncTasks.forEach((el) => {
          expect(el).toBeA(Function);
        });
      });
    });
  });
});
