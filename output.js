"use strict";
mintyLog(0, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


var one, two = 2, three = 1;
mintyLog(2, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
var four = 2, five;
mintyLog(3, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
var seven = {a: 1, b: 2};
mintyLog(4, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
var six = [1,2,3,4];
mintyLog(5, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)






var expr = 'Mangoes';
mintyLog(9, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




for(let i = 0; i < 10; i++) {
mintyLog(12, 'global', ["i"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(i);
mintyLog(13, 'global', ["i"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




  break;
mintyLog(16, 'global', ["i"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


}
mintyLog(18, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


for(var j = 0; j < 5; j++) {
mintyLog(20, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  j += j;
mintyLog(21, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(22, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




var regexstr = 'here is some string'
mintyLog(25, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


regexstr.replace(/"\/text/g, '')
mintyLog(27, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




for(var keys in seven) {
mintyLog(30, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(keys);
mintyLog(31, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(32, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


function fn(a, b, c) {
mintyLog(34, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(a,b,c);
mintyLog(35, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  function fn2(d,e,f) {
mintyLog(36, 'global', ["a","b","c","d","e","f"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c,d,e,f, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
    console.log('what!');
mintyLog(37, 'global', ["a","b","c","d","e","f"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c,d,e,f, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
    var bus = 'slow';
mintyLog(38, 'global', ["a","b","c","d","e","f","bus"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c,d,e,f,bus, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  }
mintyLog(39, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  fn2(4,5,6);
mintyLog(40, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  var car = 'toyota';
mintyLog(41, 'global', ["a","b","c","car"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c,car, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(42, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


var expr = 'food';
mintyLog(44, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)






fn(1,2,3);
mintyLog(48, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




six.forEach(val => {
mintyLog(51, 'global', ["val"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],val, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(val);
mintyLog(52, 'global', ["val"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],val, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
});
mintyLog(53, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
console.log('here')
mintyLog(54, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


six.forEach((val, i) => {
mintyLog(56, 'global', ["val","i"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],val,i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(val);
mintyLog(57, 'global', ["val","i"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],val,i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
});
mintyLog(58, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


var checkThis = function(a) {
mintyLog(60, 'global', ["a","checkThis"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,checkThis, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log('hello there my friend');
mintyLog(61, 'global', ["a","checkThis"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,checkThis, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
};
mintyLog(62, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)






do {
mintyLog(66, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log('dowhile');
mintyLog(67, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
} while(false);
mintyLog(68, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




var k = 10;
mintyLog(71, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


while(k !== 3) {
mintyLog(73, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  let mom = 'nice';
mintyLog(74, 'global', ["mom"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  console.log(k);
mintyLog(75, 'global', ["mom"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  k--;
mintyLog(76, 'global', ["mom"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(77, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


checkThis({
  that: 1,  hello:2
});
mintyLog(81, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




function stuff(whats, that) {
mintyLog(84, 'global', ["whats","that"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  return function() {
mintyLog(85, 'global', ["whats","that"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
    console.log('hello');
mintyLog(86, 'global', ["whats","that"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  };
mintyLog(87, 'global', ["whats","that"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(88, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


function *gener(a,b,c) {
mintyLog(90, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  yield a;
mintyLog(91, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  yield b;
mintyLog(92, 'global', ["a","b","c"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(93, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)




var gen = function *(a) {
mintyLog(96, 'global', ["a","gen"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,gen, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
  yield a;
mintyLog(97, 'global', ["a","gen"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],a,gen, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
}
mintyLog(98, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
stuff(1, 2);
mintyLog(99, 'global', undefined, ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)










let what = 'what';
mintyLog(105, 'global', ["what"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


console.log(that)
mintyLog(107, 'global', ["what"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
var test = "hello";
mintyLog(108, 'global', ["what"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)
test += " buddy";
mintyLog(109, 'global', ["what"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


const hello = 'hi';
mintyLog(111, 'global', ["what","hello"], ["one","two","three","four","five","seven","six","expr","j","regexstr","keys","expr","k","test"],what,hello, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)


[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 0
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 2
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 3
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 4
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 5
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 9
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 12
0
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 13
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 18
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 20
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 21
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 20
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 21
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 20
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 21
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 22
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 25
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 27
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 30
a
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 31
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 30
b
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 31
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 32
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 42
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 44
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 34
1 2 3
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 35
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 39
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 36
what!
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 37
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 38
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 40
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 41
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 48
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 51
1
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 52
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 51
2
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 52
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 51
3
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 52
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 51
4
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 52
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 53
here
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 54
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 56
1
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 57
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 56
2
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 57
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 56
3
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 57
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 56
4
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 57
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 58
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 62
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 66
dowhile
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 67
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 68
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 71
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
10
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
9
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
8
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
7
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
6
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
5
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 73
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 74
4
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 75
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 76
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 77
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 60
hello there my friend
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 61
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 81
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 88
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 93
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 98
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 84
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 99
[ 'one',
  'two',
  'three',
  'four',
  'five',
  'seven',
  'six',
  'expr',
  'j',
  'regexstr',
  'keys',
  'expr',
  'k',
  'test' ] 105
[{"file":"test.js","line":0,"variables":{"special":{},"global":{}},"scope":"global"},{"file":"test.js","line":2,"variables":{"special":{},"global":{"two":2,"three":1}},"scope":"global"},{"file":"test.js","line":3,"variables":{"special":{},"global":{"two":2,"three":1,"four":2}},"scope":"global"},{"file":"test.js","line":4,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2}}},"scope":"global"},{"file":"test.js","line":5,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4]}},"scope":"global"},{"file":"test.js","line":9,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes"}},"scope":"global"},{"file":"test.js","line":12,"variables":{"special":{"i":0},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes"}},"scope":"global"},{"file":"test.js","line":13,"variables":{"special":{"i":0},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes"}},"scope":"global"},{"file":"test.js","line":18,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes"}},"scope":"global"},{"file":"test.js","line":20,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":0}},"scope":"global"},{"file":"test.js","line":21,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":0}},"scope":"global"},{"file":"test.js","line":20,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":1}},"scope":"global"},{"file":"test.js","line":21,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":2}},"scope":"global"},{"file":"test.js","line":20,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":3}},"scope":"global"},{"file":"test.js","line":21,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":6}},"scope":"global"},{"file":"test.js","line":22,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7}},"scope":"global"},{"file":"test.js","line":25,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string"}},"scope":"global"},{"file":"test.js","line":27,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string"}},"scope":"global"},{"file":"test.js","line":30,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"a"}},"scope":"global"},{"file":"test.js","line":31,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"a"}},"scope":"global"},{"file":"test.js","line":30,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":31,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":32,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":42,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"Mangoes","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":44,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":34,"variables":{"special":{"a":1,"b":2,"c":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":35,"variables":{"special":{"a":1,"b":2,"c":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":39,"variables":{"special":{"a":1,"b":2,"c":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":36,"variables":{"special":{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":37,"variables":{"special":{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":38,"variables":{"special":{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"bus":"slow"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":40,"variables":{"special":{"a":1,"b":2,"c":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":41,"variables":{"special":{"a":1,"b":2,"c":3,"car":"toyota"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":48,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":51,"variables":{"special":{"val":1},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":52,"variables":{"special":{"val":1},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":51,"variables":{"special":{"val":2},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":52,"variables":{"special":{"val":2},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":51,"variables":{"special":{"val":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":52,"variables":{"special":{"val":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":51,"variables":{"special":{"val":4},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":52,"variables":{"special":{"val":4},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":53,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":54,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":56,"variables":{"special":{"val":1,"i":0},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":57,"variables":{"special":{"val":1,"i":0},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":56,"variables":{"special":{"val":2,"i":1},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":57,"variables":{"special":{"val":2,"i":1},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":56,"variables":{"special":{"val":3,"i":2},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":57,"variables":{"special":{"val":3,"i":2},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":56,"variables":{"special":{"val":4,"i":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":57,"variables":{"special":{"val":4,"i":3},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":58,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":62,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":66,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":67,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":68,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b"}},"scope":"global"},{"file":"test.js","line":71,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":10}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":10}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":10}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":10}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":9}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":9}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":9}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":9}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":8}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":8}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":8}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":8}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":7}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":7}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":7}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":7}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":6}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":6}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":6}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":6}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":5}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":5}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":5}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":5}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":4}},"scope":"global"},{"file":"test.js","line":73,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":4}},"scope":"global"},{"file":"test.js","line":74,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":4}},"scope":"global"},{"file":"test.js","line":75,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":4}},"scope":"global"},{"file":"test.js","line":76,"variables":{"special":{"mom":"nice"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":77,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":60,"variables":{"special":{"a":{"that":1,"hello":2}},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":61,"variables":{"special":{"a":{"that":1,"hello":2}},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":81,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":88,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":93,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":98,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":84,"variables":{"special":{"whats":1,"that":2},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":99,"variables":{"special":{},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"},{"file":"test.js","line":105,"variables":{"special":{"what":"what"},"global":{"two":2,"three":1,"four":2,"seven":{"a":1,"b":2},"six":[1,2,3,4],"expr":"food","j":7,"regexstr":"here is some string","keys":"b","k":3}},"scope":"global"}]
