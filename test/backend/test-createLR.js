/* eslint no-unused-vars: 0 */

'use strict';
const createLR = require('./../../lib/createLineRules.js');
const createLRFixture = require('./../fixtures/createLR-input.js');
const lineActivityFixture = require('./../fixtures/lineActivityObj.js');
const test = require('tape');
const sinon = require('sinon');

test('ruler', (t) => {
  t.plan(2);

  const addScopeName = sinon.spy(createLR.addScopeName);
  const lineActivityObj = createLR.ruler(createLRFixture);

  t.equal(typeof createLR.ruler, 'function');
  t.deepEqual(lineActivityObj, lineActivityFixture);
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
