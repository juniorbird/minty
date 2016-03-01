const fs = require('fs');



function replaceDeclarations(file) {
  'use strict'
  let fileIn = file.split(/(\n|\r|\r\n)/);
  let fileOut = [];

  const varDecRE = /(const|let|var)\s([^\s;]*)(\s*=\s*.*)[^;]/gi;
  const varSetRE = /(\S*)\s*=\s*([^;]*);/gi;
  let varDecLine;
  let varDecDec;
  let varSetLine;
  let varSetSet;

  for (let line of fileIn) {
      fileOut.push(line);
      varDecLine = varDecRE.exec(line);

      varDecDec = (varDecLine && varDecLine[2].length > 0) ? `~~~~recorder['${varDecLine[2]}'] = ${varDecLine[2]};\nconsole.log(recorder);` : '';
      fileOut.push(varDecDec);

      varSetLine = varSetRE.exec(line);
      // if (varSetLine) console.log(varSetLine[1] + '=' + varSetLine[2]);

      varSetSet = (varSetLine) ? `\nconsole.log(recorder);` : '';
      // if (varSetLine) varSetSet = '\nconsole.log(recorder);\n';
      fileOut.push(varSetSet);
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
