const minty = require('./index.js');
const path = require('path');


function hello(a,b,c) {
  console.log(a);
  var d = b + c;
  console.log(d);
}


minty.file(path.join(__dirname, '/lib/test.js'));


var mint = minty.wrap(hello);

mint(1,2,3)
