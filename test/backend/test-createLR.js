'use strict';
const createLR = require('./../../lib/createLineRules.js');
const createLRInput = require('./../fixtures/createLR-input.js');
const createLROutput = require('./../fixtures/createLR-output.js');
const lineActivityFixture = require('./../fixtures/lineActivityObj.js')
const expect = require('expect');
const test = require('tape');
const sinon = require('sinon');

test('ruler', (t) => {
  t.plan(3);

  let addScopeName = sinon.spy(createLR, 'addScopeName');
  let addVariables = sinon.spy(createLR, 'addVariables');
  let addLines = sinon.spy(createLR, 'addLines');
  console.log('----- BEFORE CALLING ---', addScopeName.callCount);






  var lineActivityObj = createLR.ruler(createLRInput.parsed);

  t.equal(typeof createLR.ruler, 'function');
  t.deepEqual(lineActivityObj, lineActivityFixture);
  t.equal(addLines.callCount, 16);
  t.equal(addVariables.callCount, 5);
  console.log('call count', addScopeName.callCount);
});



test('addLines', (t) => {
  t.plan(2);
  let lineActivity = {};
  createLR.addLines('FunctionDeclaration', 'SCOPE', createLRInput.parseFunctionDec, lineActivity);
  t.deepEqual(lineActivity, createLROutput.addLines)
  t.equal(typeof createLR.addLines, 'function');

});

test('ruler', (t) => {
  t.plan(1);
  t.equal(typeof createLR.addVariables, 'function');
});

test('ruler', (t) => {
  t.plan(1);
  t.equal(typeof createLR.addScopeName, 'function');
});
