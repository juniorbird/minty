var asts = {};
// var Object = {}; //stub

asts.FunctionDeclaration = { type: 'FunctionDeclaration',
    start: 248,
    end: 406,
    loc: { start: [Object], end: [Object] },
    id:
     { type: 'Identifier',
       start: 257,
       end: 259,
       loc: [Object],
       name: 'fn', },
    generator: false,
    expression: false,
    params: [
      {
        type: "Identifier",
        start: 689,
        end: 694,
        loc: {
          start: {
            line: 55,
            column: 15,
          },
          end: {
            line: 55,
            column: 20,
          },
        },
        name: "whats",
      },
      {
        type: "Identifier",
        start: 696,
        end: 700,
        loc: {
          start: {
            line: 55,
            column: 22,
          },
          end: {
            line: 55,
            column: 26
          },
        },
        name: "that",
      },
    ],
    body:
     { type: 'BlockStatement',
       start: 269,
       end: 406,
       loc: 'loc',
       body: 'obj', }, };

asts.FunctionExpression = { type: 'FunctionExpression',
    start: 543,
    end: 597,
    loc: { start: [Object], end: [Object] },
    id: null,
    generator: false,
    expression: false,
    params: [],
    body:
     { type: 'BlockStatement',
       start: 554,
       end: 597,
       loc: [Object],
       body: [Object], }, };

asts.ForStatement = { type: 'ForStatement',
    start: 156,
    end: 204,
    loc: { start: [Object], end: [Object] },
    init:
     { type: 'VariableDeclaration',
       start: 160,
       end: 169,
       loc: [Object],
       declarations: [Object],
       kind: 'let', },
    test:
     { type: 'BinaryExpression',
       start: 171,
       end: 177,
       loc: [Object],
       left: [Object],
       operator: '<',
       right: [Object], },
    update:
     { type: 'UpdateExpression',
       start: 179,
       end: 182,
       loc: [Object],
       operator: '++',
       prefix: false,
       argument: [Object], },
    body:
     { type: 'BlockStatement',
       start: 184,
       end: 204,
       loc: [Object],
       body: [Object], }, };

asts.WhileStatement = { type: 'WhileStatement',
    start: 614,
    end: 657,
    loc: { start: [Object], end: [Object], },
    test:
     { type: 'BinaryExpression',
       start: 620,
       end: 627,
       loc: [Object],
       left: [Object],
       operator: '!==',
       right: [Object], },
    body:
     { type: 'BlockStatement',
       start: 629,
       end: 657,
       loc: [Object],
       body: [Object], }, };

asts.ReturnStatement = { type: 'ReturnStatement',
    start: 706,
    end: 726,
    loc: { start: [Object], end: [Object] },
    argument:
     { type: 'BinaryExpression',
       start: 713,
       end: 725,
       loc: [Object],
       left: [Object],
       operator: '+',
       right: [Object], }, };

asts.ArrowFunctionExpression = { type: 'ArrowFunctionExpression',
    start: 438,
    end: 468,
    loc: { start: [Object], end: [Object] },
    id: null,
    generator: false,
    expression: false,
    params: [[Object]],
    body:
     { type: 'BlockStatement',
       start: 445,
       end: 468,
       loc: [Object],
       body: [Object], }, };

asts.CallExpression = { type: 'CallExpression',
    start: 188,
    end: 202,
    loc: { start: [Object], end: [Object] },
    callee:
     { type: 'MemberExpression',
       start: 188,
       end: 199,
       loc: [Object],
       object: [Object],
       property: [Object],
       computed: false, },
    arguments: [[Object], ], };

module.exports = {
  asts: asts,
};
