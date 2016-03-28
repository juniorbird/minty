"use strict";

var one, two = 2, three = 1;
var four = 2, five;
var seven = {a: 1, b: 2};
var six = [1,2,3,4];
hey = 9, ho = 1;
warm = true;

 //what should we do if var test = 'shoot'

var expr = 'Mangoes';


for(let i = 0; i < 10; i++) {
  console.log(i);


  break;

}

for(var j = 0; j < 5; j++) {
  j += j;
}


var regexstr = 'here is some string'

regexstr.replace(/"\/text/g, '')


for(var keys in seven) {
  console.log(keys);
}

function fn(a, b, c) {
  blob = 'blobbers'
  console.log(a,b,c);
  function fn2(d,e,f) {
    console.log('what!');
    var bus = 'slow';
  }
  fn2(4,5,6);
  var car = 'toyota';
}

var expr = 'food';



fn(1,2,3);

six.forEach(val => {
  console.log(val);
});
console.log('here')

six.forEach((val, i) => {
  console.log(val);
});

var checkThis = function(a) {
  console.log('hello there my friend');
};



do {
  console.log('dowhile');
} while(false);


var k = 10;

while(k !== 3) {
  let mom = 'nice';
  console.log(k);
  k--;
}

checkThis({
  that: 1,  hello:2
});


function stuff(whats, that) {
  return function() {
    console.log('hello');
  };
}

function *gener(a,b,c) {
  yield a;
  yield b;
}


var gen = function *(a) {
  yield a;
}
stuff(1, 2);

var binkers = 10;
if (binkers < 30) {
  var bonkers = 31
}
/*
* here is another comment
* with some stuff
* shoot */
let what = 'what';
var ted = "Ted"
Ted = 'T'
what = 'where';

console.log(that)
var test = "hello";
test += " buddy";

const hello = 'hi';
