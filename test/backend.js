const utils = require('../lib/utils.js');
const expect = require('expect');

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
      expect(utils.multiLineVarsCheck([
          'var one = {',
          '  a: 1,',
          '  b: 2',
          '};',
          '',
          'var two = [',
          '  "a",', '  "b"',
          ']',
          '',
        ]))
        .toEqual([
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
        ]);
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
  describe('#createLine', () => {
    it('createLine should exist', () => {
      expect(utils.createLine).toBeA(Function);
    });
    it('should return blank line when no text exists on line', () => {
      const runCreateLine = [];
      utils.createLine('minty.js', runCreateLine, [], '', 2);
      expect(runCreateLine)
        .toEqual(['\n', '\n']);
    });
    it('should return a minty.variable function with "minty undefined" when there are no variables or parameters are declared', () => {
      const runCreateLine = [];
      utils.createLine('minty.js', runCreateLine, [], 'console.log("minty is awesome")', 2);
      expect(runCreateLine)
      .toEqual([
        'console.log("minty is awesome")\n',
        'minty.variableLog(2, file, log, [], \'_mintyUndefined\');\n',
      ]);
    });
    it('should return a minty.variable function after each line with active variables and parameters', () => {
      const runCreateLine = [];
      utils.createLine('minty.js', runCreateLine, ["a", "b", "c"], 'console.log("minty is awesome")', 2);
      expect(runCreateLine)
        .toEqual([
          'console.log("minty is awesome")\n',
          'minty.variableLog(2, file, log, ["a","b","c"], a, b, c);\n',
        ]);
    });
  });
});
