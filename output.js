"use strict"; undefined
 undefined
var one, two = 2, three = 1; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
var four = 2, five; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
var seven = {a: 1, b: 2}; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
var six = [1,2,3,4]; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
 undefined
 undefined
 undefined
var expr = 'Mangoes'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
 undefined
 undefined
for(let i = 0; i < 10; i++) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'ForStatement' } ],
  variables: { variables: { names: [Object], kind: 'let' } } }
  console.log(i); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
 undefined
  break; { rulesFound: 
   [ { action: 'START', rule: 'SWAP', type: 'BreakStatement' },
     { action: 'END', rule: 'SWAP', type: 'BreakStatement' } ] }
 undefined
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'ForStatement' } ] }
 undefined
for(var j = 0; j < 5; j++) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'ForStatement' } ],
  variables: { variables: { names: [Object], kind: 'var' } } }
  j += j; undefined
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'ForStatement' } ] }
 undefined
 undefined
var regexstr = 'here is some string' { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
 undefined
regexstr.replace(/"\/text/g, '') { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
 undefined
for(var keys in seven) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'ForInStatement' } ],
  variables: { variables: { names: [Object], kind: 'var' } } }
  console.log(keys); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'ForInStatement' } ] }
 undefined
function fn(a, b, c) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionDeclaration' } ],
  variables: { parameters: [ 'a', 'b', 'c' ] },
  scope: 'fn' }
  console.log(a,b,c); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
  function fn2(d,e,f) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionDeclaration' } ],
  variables: { parameters: [ 'd', 'e', 'f' ] },
  scope: 'fn2' }
    console.log('what!'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
    var bus = 'slow'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
  } { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionDeclaration' } ] }
  fn2(4,5,6); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
  var car = 'toyota'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionDeclaration' } ] }
 undefined
var expr = 'food'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
 undefined
switch (expr) { { rulesFound: [ { action: 'START', rule: 'VOID', type: 'SwitchStatement' } ] }
 undefined
  case 'toy': { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'SwitchCase' } ],
  variables: {} }
    console.log('toy'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
    break; { rulesFound: 
   [ { action: 'END', rule: 'SCOPE', type: 'SwitchCase' },
     { action: 'START', rule: 'SWAP', type: 'BreakStatement' },
     { action: 'END', rule: 'SWAP', type: 'BreakStatement' } ] }
  case 'food': { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'SwitchCase' } ],
  variables: {} }
    console.log('food'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
    break; { rulesFound: 
   [ { action: 'END', rule: 'SCOPE', type: 'SwitchCase' },
     { action: 'START', rule: 'SWAP', type: 'BreakStatement' },
     { action: 'END', rule: 'SWAP', type: 'BreakStatement' } ] }
  default: { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'SwitchCase' } ],
  variables: {} }
    console.log('i dunno!'); { rulesFound: 
   [ { action: 'END', rule: 'SCOPE', type: 'SwitchCase' },
     { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
} { rulesFound: [ { action: 'END', rule: 'VOID', type: 'SwitchStatement' } ] }
 undefined
fn(1,2,3); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
six.forEach(val => { { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'START',
       rule: 'SCOPE',
       type: 'ArrowFunctionExpression' } ],
  variables: { parameters: [ 'val' ] },
  scope: 'anonymous function' }
  console.log(val); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
}); { rulesFound: 
   [ { action: 'END', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'SCOPE', type: 'ArrowFunctionExpression' } ] }
console.log('here') { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
six.forEach((val, i) => { { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'START',
       rule: 'SCOPE',
       type: 'ArrowFunctionExpression' } ],
  variables: { parameters: [ 'val', 'i' ] },
  scope: 'anonymous function' }
  console.log(val); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
}); { rulesFound: 
   [ { action: 'END', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'SCOPE', type: 'ArrowFunctionExpression' } ] }
 undefined
var checkThis = function(a) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionExpression' } ],
  variables: 
   { variables: { names: [Object], kind: 'var' },
     parameters: [ 'a' ] },
  scope: 'checkThis' }
  console.log('hello there my friend'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
}; { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionExpression' } ] }
 undefined
 undefined
 undefined
 undefined
 undefined
 undefined
do { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'DoWhileStatement' } ] }
  console.log('dowhile'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
} while(false); { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'DoWhileStatement' } ] }
 undefined
 undefined
var k = 10; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
 undefined
while(k !== 3) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'WhileStatement' } ] }
  let mom = 'nice'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'let' } } }
  console.log(k); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
  k--; undefined
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'WhileStatement' } ] }
 undefined
checkThis({ { rulesFound: [ { action: 'START', rule: 'VOID', type: 'CallExpression' } ] }
  that: 1,  hello:2 undefined
}); { rulesFound: [ { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
 undefined
function stuff(whats, that) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionDeclaration' } ],
  variables: { parameters: [ 'whats', 'that' ] },
  scope: 'stuff' }
  return function() { { rulesFound: 
   [ { action: 'START', rule: 'SWAP', type: 'ReturnStatement' },
     { action: 'START', rule: 'SCOPE', type: 'FunctionExpression' } ],
  variables: { parameters: [] },
  scope: 'anonymous function' }
    console.log('hello'); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
  }; { rulesFound: 
   [ { action: 'END', rule: 'SWAP', type: 'ReturnStatement' },
     { action: 'END', rule: 'SCOPE', type: 'FunctionExpression' } ] }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionDeclaration' } ] }
 undefined
function *gener(a,b,c) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionDeclaration' } ],
  variables: { parameters: [ 'a', 'b', 'c' ] },
  scope: 'gener' }
  yield a; { rulesFound: 
   [ { action: 'START', rule: 'SWAP', type: 'YieldExpression' },
     { action: 'END', rule: 'SWAP', type: 'YieldExpression' } ] }
  yield b; { rulesFound: 
   [ { action: 'START', rule: 'SWAP', type: 'YieldExpression' },
     { action: 'END', rule: 'SWAP', type: 'YieldExpression' } ] }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionDeclaration' } ] }
 undefined
 undefined
var gen = function *(a) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'FunctionExpression' } ],
  variables: 
   { variables: { names: [Object], kind: 'var' },
     parameters: [ 'a' ] },
  scope: 'gen' }
  yield a; { rulesFound: 
   [ { action: 'START', rule: 'SWAP', type: 'YieldExpression' },
     { action: 'END', rule: 'SWAP', type: 'YieldExpression' } ] }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'FunctionExpression' } ] }
stuff(1, 2); { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
 undefined
var binkers = 10; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
if (binkers < 30) { { rulesFound: [ { action: 'START', rule: 'SCOPE', type: 'IfStatement' } ] }
  var bonkers = 31 { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
} { rulesFound: [ { action: 'END', rule: 'SCOPE', type: 'IfStatement' } ] }
 undefined
 undefined
 undefined
 undefined
let what = 'what'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'let' } } }
var ted = "Ted" { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
what = 'where'; undefined
 undefined
console.log(that) { rulesFound: 
   [ { action: 'START', rule: 'VOID', type: 'CallExpression' },
     { action: 'END', rule: 'VOID', type: 'CallExpression' } ] }
var test = "hello"; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'var' } } }
test += " buddy"; undefined
 undefined
const hello = 'hi'; { rulesFound: [],
  variables: { variables: { names: [Object], kind: 'const' } } }
 undefined
"use strict";
mintyLog(0, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test)

var one, two = 2, three = 1;
mintyLog(2, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three)
var four = 2, five;
mintyLog(3, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five)
var seven = {a: 1, b: 2};
mintyLog(4, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven)
var six = [1,2,3,4];
mintyLog(5, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six)



var expr = 'Mangoes';
mintyLog(9, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr)


for(let i = 0; i < 10; i++) {
mintyLog(12, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr)
mintyLog(13, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr)
  console.log(i);


mintyLog(16, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr)
  break;
mintyLog(16, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr)

}

for(var j = 0; j < 5; j++) {
mintyLog(20, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j)
  j += j;
mintyLog(21, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j)
}


var regexstr = 'here is some string'
mintyLog(25, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr)

mintyLog(27, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr)
regexstr.replace(/"\/text/g, '')


for(var keys in seven) {
mintyLog(30, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
mintyLog(31, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
  console.log(keys);
}

function fn(a, b, c) {
mintyLog(34, 'fn', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
mintyLog(35, 'fn', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
  console.log(a,b,c);
  function fn2(d,e,f) {
mintyLog(36, 'fn2', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
mintyLog(37, 'fn2', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
    console.log('what!');
    var bus = 'slow';
mintyLog(38, 'fn2', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
  }
mintyLog(40, 'fn', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
  fn2(4,5,6);
  var car = 'toyota';
mintyLog(41, 'fn', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys)
}

var expr = 'food';
mintyLog(44, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)

mintyLog(46, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
switch (expr) {

  case 'toy':
mintyLog(48, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
mintyLog(49, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
    console.log('toy');
    break;
  case 'food':
mintyLog(51, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
mintyLog(52, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
    console.log('food');
    break;
  default:
mintyLog(54, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
mintyLog(55, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
    console.log('i dunno!');
}

mintyLog(58, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
fn(1,2,3);

mintyLog(60, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
six.forEach(val => {
mintyLog(61, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
  console.log(val);
});
mintyLog(63, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
console.log('here')

mintyLog(65, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
six.forEach((val, i) => {
mintyLog(66, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
  console.log(val);
});

var checkThis = function(a) {
mintyLog(69, 'checkThis', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
mintyLog(70, 'checkThis', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
  console.log('hello there my friend');
};






do {
mintyLog(78, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
mintyLog(79, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)
  console.log('dowhile');
} while(false);
mintyLog(80, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr)


var k = 10;
mintyLog(83, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)

while(k !== 3) {
mintyLog(85, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  let mom = 'nice';
mintyLog(86, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(87, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  console.log(k);
  k--;
mintyLog(88, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
}

mintyLog(91, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
checkThis({
  that: 1,  hello:2
});


function stuff(whats, that) {
mintyLog(96, 'stuff', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(97, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  return function() {
mintyLog(97, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(98, 'anonymous function', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
    console.log('hello');
  };
}

function *gener(a,b,c) {
mintyLog(102, 'gener', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(103, 'gener', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  yield a;
mintyLog(103, 'gener', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(104, 'gener', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  yield b;
mintyLog(104, 'gener', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
}


var gen = function *(a) {
mintyLog(108, 'gen', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
mintyLog(109, 'gen', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
  yield a;
mintyLog(109, 'gen', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
}
mintyLog(111, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k)
stuff(1, 2);

var binkers = 10;
mintyLog(113, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers)
if (binkers < 30) {
mintyLog(114, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers)
  var bonkers = 31
mintyLog(115, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers)
}




let what = 'what';
mintyLog(121, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers)
var ted = "Ted"
mintyLog(122, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted)
what = 'where';
mintyLog(123, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted)

mintyLog(125, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted)
console.log(that)
var test = "hello";
mintyLog(126, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test)
test += " buddy";
mintyLog(127, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test)

const hello = 'hi';
mintyLog(129, '_mintyGlobalScope', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test","one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","binkers","bonkers","ted","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test,one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,binkers,bonkers,ted,test)

0
a
b
food
1 2 3
what!
1
2
3
4
here
1
2
3
4
dowhile
10
9
8
7
6
5
4
hello there my friend
Minty has finished analyzing test.js
