'use strict';

const _eval = require('eval');
const fs = require('fs');
const appRoot = require('app-root-path');
const path = require('path');
let filename;
const log = [];

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

  function variableAdd(type, key) {
    if (type) {
      while (type.length) {
        retObj.variables[key][type[0]] = args[0];
        args.splice(0, 1);
        type.splice(0, 1);
      }
    }
  }
  variableAdd(special, 'special');
  variableAdd(variables, 'global');
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
  text.log.forEach(line => {
    if (completed) return;
    if (line.indexOf('mintyLog') !== -1) {
      const currLine = parseInt(line.slice(9), 10);
      if (currLine > finalLine) {
        errInfo.line = currLine;
        errInfo.scope = line.split(',')[1];
        completed = true;
      }
    }
  });
  return errInfo;
}

function finalizeRun(output) {
  fs.mkdir(appRoot + '/minty', (err) => {
    // if (err) throw err;
    fs.mkdir(appRoot + '/minty/file', (err2) => {
      // if (err2) throw err2;
      fs.readFile(path.join(__dirname, '/mintyTemplates/mintyVisTemplate.js'), (err3, template) => {
        // if (err3) throw err3;
        fs.writeFile(appRoot + '/minty/file/mintyVis.js', `var data = ${output} \n ${template}`, (err4) => {
          // if (err4) throw err4;
          fs.createReadStream(appRoot + '/node_modules/minty/lib/mintyTemplates/index.html')
            .pipe(fs.createWriteStream(appRoot + '/minty/file/minty.html'));
        });
      });
    });
  });
}


function runFile(text, absPath) {
  console.log(text.log.join('\n'));
  filename = absPath.slice(absPath.lastIndexOf('/') + 1);

  try {
    _eval(text.log.join('\n'), filename, {
      mintyLog: mintyLog,
    }, true);
  } catch (err) {
    const errInfo = errorLineFind(text, log);
    // console.log(errLine)
    const errVars = log.length ? log[log.length - 2].variables : text.globalVars;
    log.push({
      file: filename,
      line: errInfo.line,
      scope: errInfo.scope,
      error: err.message,
      variables: errVars,
    });
  } finally {
    const output = JSON.stringify({
      entry: filename,
      file: text.log.join('\n'),
      log: log,
    }, (key, value) => {
      if (value === undefined) return '_mintyUndefined';
      if (value === Function) return value.toString();
      return value;
    });
    finalizeRun(output);
    console.log(`Minty has finished analyzing ${filename}`);
  }
}

function wrap(text) {
  console.log(text.log.join('\n'), 'text')
  // filename = text.log[1]
  //   .split(',')[1]
  //   .trim();

};




const run = {
  runFile: runFile,
  wrap: wrap,
};

module.exports = run;
