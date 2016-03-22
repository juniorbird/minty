const utils = require('../lib/utils.js');
const expect = require('expect');

const multiLineIn = [
    'var one = {',
    '  a: 1,',
    '  b: 2',
    '};',
    '',
    'var two = [',
    '  "a",', '  "b"',
    ']',
    '',
  ];
  const multiLineOut = [
    'var one = {  a: 1,  b: 2};',
    '\n',
    '\n',
    '\n',
    '\n',
    'var two = [  "a",  "b"]',
    '\n',
    '\n',
    '\n',
    '\n',
  ];

const mediumIn = "var one = 'Greetings';\nvar two = 'Programs';\n\nvar three = 'Positive and negative, huh? You are a Bit.';";
const mediumOut = ['var one = \'Greetings\';', 'var two = \'Programs\';', '', 'var three = \'Positive and negative, huh? You are a Bit.\';'];

// Stub out the callbacks
function returnFunc1(err, val1, val2) {
  // Generic callback that can be used with Async's callback format;
  return val1;
}

function returnFunc2(err, val1, val2) {
  // Generic callback that can be used with Async's callback format;
  return val2;
}

describe('Backend', () => {
  describe('#read', () => {
    it('read should exist', () => {
      expect(utils.read).toBeA(Function);
    });
  });
  describe('#multiLineVarsCheck', () => {
    it('multiLineVarsCheck should exist', () => {
      expect(utils.multiLineVarsCheck).toBeA(Function);
    });
    it('multiLineVarsCheck should convert multiliine variables into single line variables', () => {
      expect(utils.multiLineVarsCheck(multiLineIn))
        .toEqual(multiLineOut);
    });
  });
  describe('#splitFile', () => {
    it('splitFile should exist', () => {
      expect(utils.splitFile).toBeA(Function);
    });
    it('should return an array of the function when passed a filename', () => {
      expect(utils.splitFile(mediumIn, 'file', returnFunc1))
        .toEqual(mediumOut);
    });
    it('should return an array of the function when NOT passed a filename', () =>{
      expect(utils.splitFile(mediumIn, undefined, returnFunc1))
        .toEqual(mediumOut);
    });
  });
  describe('#functionLineSwap', () => {
    it('functionLineSwap should exist', () => {
      expect(utils.functionLineSwap).toBeA(Function);
    });
    it('functionLineSwap should place check code injection before function call when function is called after declaration', () => {
      expect(utils.functionLineSwap(['function hello(a, b, c) {\n',
          'minty.variableLog(0, file, log, ["a","b","c"], a, b, c);\n',
          '  console.log(a + b + c);\n',
          'minty.variableLog(1, file, log, ["a","b","c"], a, b, c);\n',
          '}\n',
          '\n',
          'hello(1, 2, 3);\n',
          "minty.variableLog(4, file, log, [], '_mintyUndefined')",
          '\n',
        ]))
        .toEqual(
        [
          'function hello(a, b, c) {\n',
          'minty.variableLog(0, file, log, ["a","b","c"], a, b, c);\n',
          '  console.log(a + b + c);\n',
          'minty.variableLog(1, file, log, ["a","b","c"], a, b, c);\n',
          '}\n',
          '\n',
          "minty.variableLog(4, file, log, [], '_mintyUndefined')",
          'hello(1, 2, 3);\n',
          '\n',
        ]
        );
    });
    it('functionLineSwap should place check code injection before function call when function is called before declaration', () => {
      expect(utils.functionLineSwap([
        'hello(1, 2, 3);\n',
        'minty.variableLog(4, file, log, [], \'_mintyUndefined\')',
        '\n',
        'function hello(a, b, c) {\n',
        'minty.variableLog(0, file, log, ["a","b","c"], a, b, c);\n',
        '  console.log(a + b + c);\n',
        'minty.variableLog(1, file, log, ["a","b","c"], a, b, c);\n',
        '}\n',
        '\n',
      ]))
        .toEqual([
          'minty.variableLog(4, file, log, [], \'_mintyUndefined\')',
          'hello(1, 2, 3);\n',
          '\n',
          'function hello(a, b, c) {\n',
          'minty.variableLog(0, file, log, ["a","b","c"], a, b, c);\n',
          '  console.log(a + b + c);\n',
          'minty.variableLog(1, file, log, ["a","b","c"], a, b, c);\n',
          '}\n',
          '\n',
        ]);
    });
  });
});
