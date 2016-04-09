const anonFuncHandler = require('./../../lib/anonFuncHandler.js')
const expect = require('expect');
const test = require('tape');


test('type of Anonymous Function Handler', t => {
  t.plan(1);
  t.equal(typeof anonFuncHandler, 'function')
});

test('output when passed anonymous function', t => {
  t.plan(2);
  const anonFunc = function(){};
  const anonFunc2 = function     () {};
  const output = anonFuncHandler(anonFunc.toString());
  const output2 = anonFuncHandler(anonFunc2.toString());
  t.equal(output, 'function anonymousFunc(){}');
  t.equal(output2, 'function anonymousFunc() {}');
});
