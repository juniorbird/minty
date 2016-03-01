const fs = require('fs');



function replaceDeclarations(file) {
  'use strict'
  let fileIn = file.split(/(\n|\r|\r\n)/);
  let fileOut = [];

  const varDecRE = /(const|let|var)\s([^\s;]*)(\s*=\s*.*)[^;]/gi;
  let varDecLine;
  let varDecDec;

  for (let line of fileIn) {
      fileOut.push(line);
      varDecLine = varDecRE.exec(line);

      varDecDec = (varDecLine && varDecLine[2].length > 0) ? `~~~~recorder['${varDecLine[2]}'] = "";\nconsole.log(recorder);` : '';
      fileOut.push(varDecDec);
  }

  fileOut = fileOut.join('');

  fileOut = fileOut.replace(/~~~~(.*)/g, '\n$1\n');

  fileOut = 'var recorder = {}\n' + fileOut;
  return fileOut;
}

fs.readFile(__dirname + '/test-declarations.js', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    data = String(data);
    console.log(replaceDeclarations(data));
    eval(replaceDeclarations(data));
  }
});
