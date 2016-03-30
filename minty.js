const minty = require('./index.js');
const path = require('path');



minty.file(path.join(__dirname, '/lib/test.js'));

function hello(a,b,c) {
  console.log('hi there my friend' + a + b + c);
  console.log(a + b)
  a = 3;
  function fn2(d,e,f) {
    a = 4;
  }
  fn2(6,7,8);
  console.log(a);
}


var mintified = minty.wrap(hello);

mintified(1, 2, ' hi');

// console.log(mintified.toString())
