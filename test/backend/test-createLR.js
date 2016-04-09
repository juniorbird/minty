const createLR = require('./../../lib/createLineRules.js')
const expect = require('expect');
const test = require('tape');

test('ruler', (t) => {
  t.plan(1);
  t.equal(typeof createLR.ruler, 'function');
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
