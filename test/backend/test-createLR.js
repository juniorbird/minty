'use strict';
const createLR = require('./../../lib/createLineRules.js');
const createLRFixture = require('./../fixtures/createLR-input.js');
const lineActivityFixture = require('./../fixtures/lineActivityObj.js')
const expect = require('expect');
const test = require('tape');
const sinon = require('sinon');

test('ruler', (t) => {
  t.plan(2);

  let addScopeName = sinon.spy(createLR.addScopeName);
  var lineActivityObj = createLR.ruler(createLRFixture);
  // console.log('called once', addScopeName.callCount);

  t.equal(typeof createLR.ruler, 'function');
  t.deepEqual(lineActivityObj, lineActivityFixture)
});



test('addLines', (t) => {
  t.plan(1);
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
