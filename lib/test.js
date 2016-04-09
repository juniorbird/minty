"use strict";
const b = 'a';
var one, two = 2, three = 1;
var four = 2, five;
var seven = {a: 1, b: 2};
var six = [1,2,3,4];

var expr = 'Mangoes';

for(let j = 0; j < 5; j++) {
  j += j;
}

var test2 = function() {
  console.log('hi');
}


var regexstr = 'here is some string'

regexstr.replace(/"\/text/g, '')


for(var keys in seven) {
  five = five + keys;
}


var ted = function (str, apple) {
  var a = 'b';
  if (a === 'b') {
    let b = 'c';
    for(let c = 0; c < 1; c ++) {
      console.log(c);
    }
  }
};

// ted('string',
// 'apple');
ted('string',
'apple');

function fn() {
  if(true) {
    console.log('true')
  }
  a = a + b + c;
  function fn2(d,e,f) {
    console.log('added ' + (d+e+f));
    var bus = 'slow';
  }
  fn2(4,5,6);
  var car = 'toyota';
}

var expr = 'food';

switch (expr) {
  // console.log('incoming toy')
  case 'toy':
    five = five + 'toy';
    break;
  case 'food':
    five = five + 'food';
    break;
  default:
    five = five + 'i dunno!';
}

fn(1,2,3);

six.forEach(val => {
  return val;
});

function *gener(a,b,c) {
  yield a;
  yield b;
}


var gen = function *(a) {
  yield a;
}
stuff(1, 2);
