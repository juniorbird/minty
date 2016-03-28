{
  "entry": "test.js",
  "file": "\"use strict\";\nmintyLog(0, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nvar one, two = 2, three = 1;\nmintyLog(2, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nvar four = 2, five;\nmintyLog(3, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nvar seven = {a: 1, b: 2};\nmintyLog(4, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nvar six = [1,2,3,4];\nmintyLog(5, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\n\n\nvar expr = 'Mangoes';\nmintyLog(9, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nfor(let i = 0; i < 10; i++) {\nmintyLog(12, '_mintyGlobalScope', [\"i\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(i);\nmintyLog(13, '_mintyGlobalScope', [\"i\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\n  break;\nmintyLog(16, '_mintyGlobalScope', [\"i\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n}\nmintyLog(18, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nfor(var j = 0; j < 5; j++) {\nmintyLog(20, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  j += j;\nmintyLog(21, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(22, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nvar regexstr = 'here is some string'\nmintyLog(25, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nregexstr.replace(/\"\\/text/g, '')\nmintyLog(27, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nfor(var keys in seven) {\nmintyLog(30, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(keys);\nmintyLog(31, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(32, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nfunction fn(a, b, c) {\nmintyLog(34, 'fn', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(a,b,c);\nmintyLog(35, 'fn', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  function fn2(d,e,f) {\nmintyLog(36, 'fn2', [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c,d,e,f, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n    console.log('what!');\nmintyLog(37, 'fn2', [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c,d,e,f, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n    var bus = 'slow';\nmintyLog(38, 'fn2', [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"bus\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c,d,e,f,bus, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  }\nmintyLog(39, 'fn', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  fn2(4,5,6);\nmintyLog(40, 'fn', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  var car = 'toyota';\nmintyLog(41, 'fn', [\"a\",\"b\",\"c\",\"car\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c,car, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(42, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nvar expr = 'food';\nmintyLog(44, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\n\n\nfn(1,2,3);\nmintyLog(48, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nsix.forEach(val => {\nmintyLog(50, 'anonymous function', [\"val\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],val, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(val);\nmintyLog(51, 'anonymous function', [\"val\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],val, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n});\nmintyLog(52, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nconsole.log('here')\nmintyLog(53, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nsix.forEach((val, i) => {\nmintyLog(55, 'anonymous function', [\"val\",\"i\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],val,i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(val);\nmintyLog(56, 'anonymous function', [\"val\",\"i\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],val,i, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n});\nmintyLog(57, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nvar checkThis = function(a) {\nmintyLog(59, 'checkThis', [\"a\",\"checkThis\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,checkThis, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log('hello there my friend');\nmintyLog(60, 'checkThis', [\"a\",\"checkThis\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,checkThis, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n};\nmintyLog(61, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\n\n\ndo {\nmintyLog(65, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log('dowhile');\nmintyLog(66, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n} while(false);\nmintyLog(67, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nvar k = 10;\nmintyLog(70, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nwhile(k !== 3) {\nmintyLog(72, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  let mom = 'nice';\nmintyLog(73, '_mintyGlobalScope', [\"mom\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  console.log(k);\nmintyLog(74, '_mintyGlobalScope', [\"mom\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  k--;\nmintyLog(75, '_mintyGlobalScope', [\"mom\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],mom, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(76, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\ncheckThis({\n  that: 1,  hello:2\n});\nmintyLog(80, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nfunction stuff(whats, that) {\nmintyLog(83, 'stuff', [\"whats\",\"that\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  return function() {\nmintyLog(84, 'anonymous function', [\"whats\",\"that\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n    console.log('hello');\nmintyLog(85, 'anonymous function', [\"whats\",\"that\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  };\nmintyLog(86, 'stuff', [\"whats\",\"that\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],whats,that, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(87, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nfunction *gener(a,b,c) {\nmintyLog(89, 'gener', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  yield a;\nmintyLog(90, 'gener', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  yield b;\nmintyLog(91, 'gener', [\"a\",\"b\",\"c\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,b,c, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(92, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\nvar gen = function *(a) {\nmintyLog(95, 'gen', [\"a\",\"gen\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,gen, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n  yield a;\nmintyLog(96, 'gen', [\"a\",\"gen\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],a,gen, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n}\nmintyLog(97, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nstuff(1, 2);\nmintyLog(98, '_mintyGlobalScope', undefined, [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"], one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\n\n\n\n\n\n\n\n\nlet what = 'what';\nmintyLog(104, '_mintyGlobalScope', [\"what\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nconsole.log(that)\nmintyLog(106, '_mintyGlobalScope', [\"what\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\nvar test = \"hello\";\nmintyLog(107, '_mintyGlobalScope', [\"what\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\ntest += \" buddy\";\nmintyLog(108, '_mintyGlobalScope', [\"what\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],what, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n\nconst hello = 'hi';\nmintyLog(110, '_mintyGlobalScope', [\"what\",\"hello\"], [\"one\",\"two\",\"three\",\"four\",\"five\",\"seven\",\"six\",\"expr\",\"j\",\"regexstr\",\"keys\",\"expr\",\"k\",\"test\"],what,hello, one,two,three,four,five,seven,six,expr,j,regexstr,keys,expr,k,test)\n\n",
  "log": [{
    "file": "test.js",
    "line": 0,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": "_mintyUndefined",
        "three": "_mintyUndefined",
        "four": "_mintyUndefined",
        "five": "_mintyUndefined",
        "seven": "_mintyUndefined",
        "six": "_mintyUndefined",
        "expr": "_mintyUndefined",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 2,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": "_mintyUndefined",
        "five": "_mintyUndefined",
        "seven": "_mintyUndefined",
        "six": "_mintyUndefined",
        "expr": "_mintyUndefined",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 3,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": "_mintyUndefined",
        "six": "_mintyUndefined",
        "expr": "_mintyUndefined",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 4,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": "_mintyUndefined",
        "expr": "_mintyUndefined",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 5,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "_mintyUndefined",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 9,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 12,
    "variables": {
      "special": {
        "i": 0
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 13,
    "variables": {
      "special": {
        "i": 0
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 18,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": "_mintyUndefined",
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 20,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 0,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 21,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 0,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 20,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 1,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 21,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 2,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 20,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 3,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 21,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 6,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 22,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "_mintyUndefined",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 25,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 27,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "_mintyUndefined",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 30,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "a",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 31,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "a",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 30,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 31,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 32,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 42,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "Mangoes",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 44,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 34,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn"
  }, {
    "file": "test.js",
    "line": 35,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn"
  }, {
    "file": "test.js",
    "line": 39,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn"
  }, {
    "file": "test.js",
    "line": 36,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn2"
  }, {
    "file": "test.js",
    "line": 37,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn2"
  }, {
    "file": "test.js",
    "line": 38,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "bus": "slow"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn2"
  }, {
    "file": "test.js",
    "line": 40,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn"
  }, {
    "file": "test.js",
    "line": 41,
    "variables": {
      "special": {
        "a": 1,
        "b": 2,
        "c": 3,
        "car": "toyota"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "fn"
  }, {
    "file": "test.js",
    "line": 48,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 50,
    "variables": {
      "special": {
        "val": 1
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 51,
    "variables": {
      "special": {
        "val": 1
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 50,
    "variables": {
      "special": {
        "val": 2
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 51,
    "variables": {
      "special": {
        "val": 2
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 50,
    "variables": {
      "special": {
        "val": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 51,
    "variables": {
      "special": {
        "val": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 50,
    "variables": {
      "special": {
        "val": 4
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 51,
    "variables": {
      "special": {
        "val": 4
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 52,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 53,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 55,
    "variables": {
      "special": {
        "val": 1,
        "i": 0
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 56,
    "variables": {
      "special": {
        "val": 1,
        "i": 0
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 55,
    "variables": {
      "special": {
        "val": 2,
        "i": 1
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 56,
    "variables": {
      "special": {
        "val": 2,
        "i": 1
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 55,
    "variables": {
      "special": {
        "val": 3,
        "i": 2
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 56,
    "variables": {
      "special": {
        "val": 3,
        "i": 2
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 55,
    "variables": {
      "special": {
        "val": 4,
        "i": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 56,
    "variables": {
      "special": {
        "val": 4,
        "i": 3
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "anonymous function"
  }, {
    "file": "test.js",
    "line": 57,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 61,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 65,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 66,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 67,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": "_mintyUndefined",
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 70,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 10,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 10,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 10,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 10,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 9,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 9,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 9,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 9,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 8,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 8,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 8,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 8,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 7,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 7,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 7,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 7,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 6,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 6,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 6,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 6,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 5,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 5,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 5,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 5,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 4,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 72,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 4,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 73,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 4,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 74,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 4,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 75,
    "variables": {
      "special": {
        "mom": "nice"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 76,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 59,
    "variables": {
      "special": {
        "a": {
          "that": 1,
          "hello": 2
        }
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "checkThis"
  }, {
    "file": "test.js",
    "line": 60,
    "variables": {
      "special": {
        "a": {
          "that": 1,
          "hello": 2
        }
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "checkThis"
  }, {
    "file": "test.js",
    "line": 80,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 87,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 92,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 97,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 83,
    "variables": {
      "special": {
        "whats": 1,
        "that": 2
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "stuff"
  }, {
    "file": "test.js",
    "line": 98,
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 104,
    "variables": {
      "special": {
        "what": "what"
      },
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    },
    "scope": "_mintyGlobalScope"
  }, {
    "file": "test.js",
    "line": 106,
    "scope": " '_mintyGlobalScope'",
    "error": "that is not defined",
    "variables": {
      "special": {},
      "global": {
        "one": "_mintyUndefined",
        "two": 2,
        "three": 1,
        "four": 2,
        "five": "_mintyUndefined",
        "seven": {
          "a": 1,
          "b": 2
        },
        "six": [1, 2, 3, 4],
        "expr": "food",
        "j": 7,
        "regexstr": "here is some string",
        "keys": "b",
        "k": 3,
        "test": "_mintyUndefined"
      }
    }
  }]
}

$(document).ready(() => {

  var indexCounter = -1,
      dataLength = data.log.length,
      watchedVariables,
      completeVariableList = {},
      declaredVariables,
      oldIndex,
      newIndex;

  data.log.forEach((elem) => {
    for (var variables in elem.variables) {
      completeVariableList[variables] = undefined;
    }
  });
  // appending variable names to the DOM - all their values start out as undefined

  for (var key in completeVariableList) {
    if (key !== 'return') {
      $('tbody').append(`<tr id=${key}></tr>`);
      $(`#${key}`)
        .append(`<td>${key}</td>`)
        .append(`<td id=${key +'val'} class="variables">undefined</td>`);
    }
  }

  declaredVariables = Object.keys(completeVariableList);


  disableBackFirstButtons(true);
  $('#step').text(`Step 0 of ${dataLength}`);
//
  $('#forward').click(() => {
    var prevWatchedVariables;
    if (indexCounter < dataLength - 1) {
      updateCounter(indexCounter, dataLength);
    }

    //appending error to DOM
    if (indexCounter === dataLength - 1) {
      disableForwardLastButtons(true);
      if (data.log[indexCounter].error)
        $('#errormsg').text(`Error! - ${data.log[indexCounter].error}`).css('color', 'red');
    }



    //updating the variable values
    watchedVariables = data.log[indexCounter].variables;
    if (data.log[indexCounter]) {
      for (var key in watchedVariables) {
        if (key === 'return') appendReturnValue(watchedVariables.return);
        else updateVariables(key, watchedVariables);
      }
    }

    // console.log('before', data.log[indexCounter - 1].variables.return)


    // if user is analyzing a line of code and some of the variables are no longer on the watch list, those variables will get the value undefined


    if (indexCounter === 0) varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter);
    else {
      prevWatchedVariables = data.log[indexCounter - 1].variables;
      varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter, prevWatchedVariables);
      if (data.log[indexCounter - 1].variables.return)
        removeReturnValue();
    }
  });

  $('#back').click(() => {

    var watchedVariables,
        decVar,
        nextWatchedVariables;

    if (indexCounter > -1) {
      oldIndex = indexCounter;
      indexCounter--;
      newIndex = indexCounter;
      moveLineIndicator(newIndex, oldIndex, data.log);
      disableForwardLastButtons(false);
      $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
    }

    //TODO: Should turn this whole if statement as a function
    if (data.log[indexCounter + 1].variables.return)
      removeReturnValue();
    //make all values revert back to undefined when the user clicks back all the way to the beginning with the back button


    if (indexCounter === -1) {
      makeValuesUndefined();
      return;
    }

    //when user clicks back, this will update the DOM with new values
    watchedVariables = data.log[indexCounter].variables;
    if (data.log[indexCounter]) {
      // console.log('indexCounter', indexCounter, 'old line:', data[oldIndex].line, 'new line:', data[newIndex].line, 'variables:', watchedVariables);
      for (var key in watchedVariables) {
        if (key === 'return') appendReturnValue(watchedVariables.return);
        else updateVariables(key, watchedVariables);
      }
    }
    // console.log(data.log[indexCounter + 1].variables.return)


    if (oldIndex === parseInt(dataLength - 1) && data.log[oldIndex].error)
      $('#errormsg').text('');

    // if user is analyzing a line of code and some of the variables are no longer on the watch list, those variables will get the value undefined

    if (indexCounter === dataLength - 1)
      varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter);
    else {
      nextWatchedVariables = data.log[indexCounter + 1].variables;
      varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter, nextWatchedVariables);

    }

  });

//make all values revert back to undefined when the user clicks first
  $('#first').click(() => {
    if (indexCounter === dataLength - 1)
      disableForwardLastButtons(false);

    oldIndex = indexCounter;
    indexCounter = -1;
    newIndex = indexCounter;
    moveLineIndicator(newIndex, oldIndex, data.log);
    makeValuesUndefined();
    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);

    if (data.log[dataLength-1].error)
      $('#errormsg').text('');

    if (data.log[dataLength-1].variables.return)
      removeReturnValue();

  });

  //display variables and their values from the last index of the data set
  $('#last').click(() => {
    var variable,
        variableLastIndex,
        variableNamesLastIndex;
    if (indexCounter === -1)
      disableBackFirstButtons(false);

    oldIndex = indexCounter;
    indexCounter = dataLength - 1;
    newIndex = indexCounter;
    moveLineIndicator(newIndex, oldIndex, data.log);
    variablesLastIndex = data.log[indexCounter].variables;
    variableNamesLastIndex = Object.keys(variablesLastIndex);



    if (data.log[indexCounter].error)
      $('#errormsg').text(`Error! - ${data.log[indexCounter].error}`).css('color', 'red');

    if (variablesLastIndex.return)
      appendReturnValue();

    //initially this completeVariableList's variable values were all undefined
    //now im giving some of the var names its values from the last index of the log array
    variableNamesLastIndex.forEach((variable, i) => {
      completeVariableList[variable] = variablesLastIndex[variable];
    });

    $('.variables').each((i, elem) => {
      variable = completeVariableList[declaredVariables[i]];
      console.log(typeof variable, variable);
      if (variable) {
        if (variable.constructor === Array || variable.constructor === Object)
          variable = JSON.stringify(variable);
      }
      $(elem).text(`${variable}`);
    });
    disableForwardLastButtons(true);

    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
  });

});

//updates variables when user clicks forward or back button
//updates variables when user clicks forward or back button
function updateVariables(variable, watchedVariables) {
  $(`#${variable + 'val'}`).remove();
  if (watchedVariables[variable].constructor === Array || watchedVariables[variable].constructor === Object) {
    //i think i want to remove the children
    var stringifiedArrayOrObject = JSON.stringify(watchedVariables[variable]);
    $(`#${variable}`).append(`<td id="${variable + 'val'}" class="variables">${stringifiedArrayOrObject}</td>`);
    // var handledArray = handleArrays(watchedVariables[variable], 0);
    // displayArray(handledArray, variable);
  } else
    $(`#${variable}`).append(`<td id="${variable + 'val'}" class="variables">${watchedVariables[variable]}</td>`);
}

function appendReturnValue(returnValue){
  $('#return').text('Return Value: ').append(`<span id="return-val">${returnValue}</span>`);
  $('#return-value').text(returnValue);
}

function removeReturnValue() {
  $('#return').text('');
  $('#return-value').remove();
}

function handleArrays(array, depth) {
  var flattenedArray = [];
  var flattenedObj = {};
  var howNested = [];
  function inner(array, depth) {
    var arr = [];
    array.forEach((elem) => {
      if (elem instanceof Array) arr.push("array");
      else arr.push(elem);
    });
    flattenedArray.push(depth, arr);
    if (!flattenedObj[depth]) flattenedObj[depth] = [];
    flattenedObj[depth].push(arr);

    howNested.push(depth);
    // i want to continue if the element is a number, string or variable, pretty anything not an array or object
    for (var i = 0, n = array.length; i < n; i ++) {
      if (typeof array[i] !== 'object') continue;
      if (array[i] === null) continue;
      if (array[i] instanceof Array) {
        depth ++;
        inner(array[i], depth);
      }
      depth --;
    }
  }
  inner(array, depth);
  return flattenedObj;
}

// [1, [5, [7, 0], [3, [4, [], 79]]], [4, 7, [5, 9, [12, 14, []]]]]
function displayArray(nestedArrays, variable) {
  // console.log(variable, nestedArrays);
  $(`.array-table-${variable}`).remove();

  $('#main-array-table').append(
    $('<table/>', {'id': `array-table-${variable}`})
  );

  var levelsInArray = Object.keys(nestedArrays),
      index = 0;
  levelsInArray.forEach((level) => {
    nestedArrays[level].forEach((array, i) => {
      $(`#array-table-${variable}`).append(`<table class="array-table-lvl-${level + i} array-tables${level} variable-${variable}"><table/>`);
      if (array.length === 0) $(`.array-table-lvl-${level + i}.variable-${variable}`).append('<td>Empty Array</td>');

      array.forEach((elem, j) => {
        var levelOfChildrenArray = JSON.stringify(parseInt(level) + 1) + index;
        if (elem === 'array') {
          $(`.array-table-lvl-${level + i}.variable-${variable}`).append(`<td class=${levelOfChildrenArray}>${elem}</td>`);
          index++;
        }
        else $(`.array-table-lvl-${level + i}.variable-${variable}`).append(`<td>${elem}</td>`);
      });
    });
    index = 0;
  });

  styleArrayTable();
}

// function styleArrayTable(){
//   var level = 0,
//       levelHeight = 100,
//       height;
//   while ($(`.array-tables${level}`).length > 0) {
//     $(`.array-tables${level}`).each((i, elem) => {
//
//
//     });
//     level ++;
//   }
//
//
// }

function disableForwardLastButtons(value) {
  $('#forward').prop('disabled', value);
  $('#last').prop('disabled', value);
}

function disableBackFirstButtons(value) {
  $('#back').prop('disabled', value);
  $('#first').prop('disabled', value);
}

function makeValuesUndefined() {
  $('.variables').each((i, elem) => {
    if ($(elem).text() !== 'undefined')
      $(elem).text('undefined');
  });
  disableBackFirstButtons(true);
}

function varsNoLongerOnWatchList(declaredVariables, watchedVariables, index, prevOrNextWatchedVariables) {
  // Object.keys(watchedVariables);
  for (var i = 0, n = declaredVariables.length; i < n; i ++) {
    declaredVar = declaredVariables[i];
    if (watchedVariables[declaredVar] === 0) return;
    if (!watchedVariables[declaredVar] && declaredVar !== 'return') {
        $(`#${declaredVar + 'val'}`).remove();
        $(`#${declaredVar}`).append(`<td id="${declaredVar + 'val'}" class="variables">undefined</td>`);
    }
  }
}

function updateCounter() {
  oldIndex = indexCounter;
  indexCounter++;
  newIndex = indexCounter;
  moveLineIndicator(newIndex, oldIndex, data.log);

  disableBackFirstButtons(false);
  $('#step').text(`Step ${indexCounter+1} of ${dataLength}`);
}
