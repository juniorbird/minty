"use strict";

var one, two = 2, three = 1;
var four = 2, five;


 //what should we do if var test = 'shoot'

for(let i = 0; i < 10; i++) {

}

for(var j = 0; j < 5; j++) {
}

function fn(a, b, c) {
  console.log(a,b,c);
  function fn2(d,e,f) {
    console.log('what!');
    var bus = 'slow';
  }
  fn2(4,5,6);
  var car = 'toyota';
}


fn(1,2,3);


[1,2,3].forEach(val => {
  console.log(val);
});

[1,2,3].forEach((val, i) => {
  console.log(val);
});

var checkThis = function() {
  console.log('hello there my friend');
};


var k = 10;

while(k !== 3) {
  console.log(k);
  k--
}



/*
* here is another comment
* with some stuff
* shoot */
let what = 'what';

console.log(that)
var test = "hello";
var wade = `wade`;
test += " buddy";

const hello = 'hi';
