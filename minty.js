const minty = require('./index.js');
const path = require('path');



minty.file(path.join(__dirname, '/lib/test.js'));

// function hello(a,b,c) {
//   console.log('hi there my friend' + a + b + c);
// }
//
//
// var mintified = minty.wrap(hello);
//
// mintified(1, 2, ' hi');

// console.log(mintified.toString())
