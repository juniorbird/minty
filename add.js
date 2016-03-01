const fs = require('fs');

fs.readFile('test.js', 'utf8', (err, data) => {
  const results = [];
  const variables = data.match(/(?=(var|const|let)\s).*?(?==)/g)
                       .map(val => {
                         return val.replace(/(const|var|let)/gm, '')
                                   .trim();
                       })
  data = data.replace(/(\r\n|\r|\n)+/gm, `\nturnipCheck(results, variables, ${variables.join(", ")})\n`);
  console.log(data);
  eval(data);
  // console.log(results);
});

function turnipCheck(resultArr, variables) {
  "use strict"
  const args = Array.prototype.slice.call(arguments, 2)
  let returnValueObject = {};
  for(let i in variables) {
    if(args[i]) {
      returnValueObject[variables[i]] = args[i];
    }
  }
  resultArr.push(returnValueObject)
}
