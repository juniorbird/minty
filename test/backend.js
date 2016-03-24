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
const mediumInjected = `'Greetings';
minty.variableLog(0, file, log, ["one"], one);
var two = 'Programs';
minty.variableLog(1, file, log, ["one","two"], one, two);

var three = 'Positive and negative, huh? You are a Bit.';
minty.variableLog(3, file, log, ["one","two","three","huh?YouareaBit.'"], one, two, three, huh?YouareaBit.');`;

// Stub out the callbacks
function returnErr(err, val1, val2) {
  console.log('err', err);
  console.log('val1', val1);
  console.log('val2',  val2);
  return err;
}

function returnFunc1(err, val1, val2) {
  // Generic callback that can be used with Async's callback format;
  console.log('*** In returnFunc1 ***');
  console.log('val1 equals', val1);
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
    it('should return the filename when passed a filename', () =>{
      expect(utils.splitFile(mediumIn, 'medium.js', returnFunc2))
        .toEqual('medium.js');
    });
    it('should return the first function name when not passed a filename', () =>{
      expect(utils.splitFile('function myFuncName1() =\nfunction myFuncName2() =', undefined, returnFunc2))
        .toEqual('myFuncName1');
    });
    it('should return anonymous when passed neither a filename nor a function', () =>{
      expect(utils.splitFile('let foo = 1\n const bar = false', undefined, returnFunc2))
        .toEqual('anonymous');
    });
  });
  describe('#injectCheckCode', () => {
    it('injectCheckCode should exist', () => {
      expect(utils.injectCheckCode).toBeA(Function);
    });
    it('should do give expected output numbers of lines', () => {
      console.log('in injectCheckCode');
      expect(utils.injectCheckCode(mediumOut, 'medium', returnFunc1))
        .toEqual('foo');
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
