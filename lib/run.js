'use strict';

const _eval = require('eval');
let filename;
let log = [];

function mintyLog(lineNumber, scope, special, variables) {
  const args = Array.prototype.slice.call(arguments, 4);
  const retObj = {
    file: filename,
    line: lineNumber,
    variables: {
      special: {},
      global: {},
    },
    scope: scope,
  };
  if (special) {
    while (special.length) {
      retObj.variables.special[special[0]] = args[0];
      special.splice(0, 1);
      args.splice(0, 1);
    }
  }
  if (variables) {
    // console.log(variables, lineNumber)
    while (variables.length) {
      // console.log(variables[0], args[0], lineNumber, retObj.variables.global)
      retObj.variables.global[variables[0]] = args[0];
      variables.splice(0, 1);
      args.splice(0, 1);
    }
  }
  // return object into results array
  log.push(retObj);
  return;
}

function errorLineFind(text, finalLog) {
  let finalLine = 0;
  if (finalLog.length) {
    finalLine = finalLog[finalLog.length - 1].line;
  }
  const errInfo = {};
  let completed = false;
  text.split('\n').forEach(line => {
    if (completed) return;
    if (line.indexOf('mintyLog') !== -1) {
      const currLine = parseInt(line.slice(9), 10);
      if (currLine > finalLine) {
        errInfo.line = currLine;

        completed = true;
      }
    }
  });
  return errInfo;
}

function run(text, path) {
  // console.log(text);
  filename = path.slice(path.lastIndexOf('/') + 1);

  try {
    _eval(text, filename, { mintyLog: mintyLog }, true);
  } catch (err) {
    const errInfo = errorLineFind(text, log);
    // console.log(errLine)
    log.push({
      file: file,
      line: errInfo.line,
      variables: errInfo.vars,
      scope: errInfo.scope,
    });
  } finally {
    console.log('done');
  }
}



module.exports = run;
// console.log(JSON.stringify(log, (key, value) => {
//   if (value === undefined) return '_mintyUndefined';
//   return value;
// }));
// } finally {
//   fs.mkdir(appRoot + '/minty', (err) => {
//     fs.mkdir(appRoot + '/minty/file', (err) => {
//       fs.readFile(file, (err, results) => {
//         let output = {
//           entry: file,
//           log: log
//         };
//         output[file] = results.toString();
//         fs.readFile(path.join(__dirname, '/mintyTemplates/mintyVisTemplate.js'), (err, templateResults) => {
//           const logStr = JSON.stringify(output, (key, val) => {
//             if (typeof val === 'function') {
//               val = val.toString()
//                 .split('\n');
//               val.forEach((line, i) => {
//                 if (line.indexOf('minty.variableLog') !== -1) {
//                   val.splice(i, 1);
//                 }
//               });
//               val = val.join('\n');
//               return val;
//             } else if (typeof val === 'undefined') {
//               return 'undefined';
//             }
//             return val;
//           });
//           fs.writeFile(appRoot + '/minty/file/mintyVis.js', `var data = ${logStr} \n ${templateResults}`, (err) => {
//             fs.createReadStream(appRoot + '/node_modules/minty/lib/mintyTemplates/index.html')
//               .pipe(fs.createWriteStream(appRoot + '/minty/file/minty.html'));
//           });
//         });
//       });
//     });
//   });
//
//
// try {
//   eval(js);
