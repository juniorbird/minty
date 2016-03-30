'use strict';

const _eval = require('eval');
const fs = require('fs');
const appRoot = require('app-root-path');
const path = require('path');
let filename;
let log;

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
  return log.push(retObj);
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

function finalizeOutput(outputObj) {
  return JSON.stringify(outputObj, (key, value) => {
    if (value === undefined) return '_mintyUndefined';
    if (value === Function) return value.toString();
    return value;
  });
}

function finalizeRun(output, type) {
  const name = filename;
  fs.mkdir(appRoot + '/minty', (err) => {
    fs.mkdir(appRoot + `/minty/${type}`, (err2) => {
      const jquery = fs.readFileSync(appRoot + '/node_modules/jquery/dist/jquery.min.js');
      const normalizeCss = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/skeleton/css/normalize.css');
      const skeletonCss = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/skeleton/css/skeleton.css');
      const template = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/mintyVisTemplate.js');
      const beginningHtml = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/beginning.html');
      const endHtml = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/end.html');
      const bodyHtml = fs.readFileSync(appRoot + '/node_modules/minty/lib/mintyTemplates/body.html');
      const insert = `${beginningHtml} \n <script type="text/javascript"> \n ${jquery} \n </script> \n <style> \n ${normalizeCss} \n </style> \n <style> \n ${skeletonCss} \n </style> \n ${bodyHtml} \n <script type="text/javascript"> \n var data = ${output} \n ${template} \n </script> \n ${endHtml}`;
      fs.writeFile(appRoot + `/minty/${type}/${name}-${Date.now().toString()}.html`, insert, (err11) => {});
    });
  });
}

function errorHandler(error, text) {
  // console.log(error.stack)
  const errInfo = errorLineFind(text, log);
  const errVars = log.length ? log[log.length - 2].variables : text.globalVars;
  log.push({
    file: filename,
    line: errInfo.line,
    scope: errInfo.scope,
    error: error.message,
    variables: errVars,
  });
}


function runFile(fileText, absPath, originalText) {
  const fileJS = fileText.log.join('\n');
  log = [];
  filename = absPath.slice(absPath.lastIndexOf('/') + 1);
  try {
    _eval(fileJS, filename, {
      mintyLog: mintyLog,
    }, true);
  } catch (err) {
    errorHandler(err, fileText);
  } finally {
    const output = {
      entry: filename,
      log: log,
    };
    output[filename] = originalText;
    const fileOutput = finalizeOutput(output);
    finalizeRun(fileOutput, 'file');
    console.log(`Minty has finished analyzing ${filename}`);
  }
}

function wrap(wrapText, originalText) {
  log = [];
  filename = wrapText.log[1]
    .split(',')[1]
    .trim();
  const wrapJS = wrapText.log.join('\n');
  return function() {
    const args = Array.prototype.slice.call(arguments);
    try {
      const fn = eval(`(${wrapJS})`);
      fn.apply(null, args);
    } catch (err) {
      errorHandler(err, wrapText);
    } finally {
      const output = {
        entry: filename,
        log: log,
      };
      output[filename] = originalText;
      const wrapOutput = finalizeOutput(output);
      finalizeRun(wrapOutput, 'function');
    }
  };
}


const run = {
  runFile: runFile,
  wrap: wrap,
};

module.exports = run;
