const fs = require('fs');
const _ = require('lodash');
const decomment = require('decomment');
const path = require('path');

var minty = {};

//reads file into string
minty.read = function read(file, callback) {
  fs.readFile(path.join(__dirname, file), 'utf8', (err, results) => {
    callback(null, results, file);
  });
};



//split file lines into array and removes blank lines and any comments
minty.splitFile = function splitFile(results, file, callback) {
  results = decomment(results, {
    space: true
  });
  results = decomment(results);
  results = results.split('\n');
  callback(null, results, file);
};

//adds variable check function inbetween each line
minty.injectCheckCode = function injectCheckCode(results, file, callback) {
  "use strict";
  //keep track of variables as they are declared
  let variables = [];
  let activeParams = [];
  let bracketMonitor = [];
  let lineNumber = 0;
  //final code with injection will happen in this line of code;
  const injectedCodeLines = [];
  results.forEach(line => {
    if (minty.functionCheck(line)) {
      if (line.indexOf('for') === -1 && line.indexOf('while') === -1) {
        let foundVariables = minty.findVariables(line);
        if (foundVariables) variables.push(foundVariables);
      }
      //set active params
      activeParams.push(minty.findParams(line));
      //add new bracketMonitor array (one for each function currently 'running')
      bracketMonitor.push(0);
      //monitor brackets
      minty.bracketWatch(line, bracketMonitor, lineNumber);
      //create line
      minty.createLine(file, injectedCodeLines, _.flattenDeep(variables.concat(activeParams)).slice(0), line, lineNumber);
      lineNumber++;
    } else if (line !== '') {
      if (line.trim() === '}' || line.trim() === '};' || line.trim() === '})' || line.trim() === '});') {
        if (bracketMonitor.length) {
          minty.bracketWatch(line, bracketMonitor, lineNumber);
          activeParams.length = bracketMonitor.length;
        }
        injectedCodeLines.push(`${line}\n`);
        lineNumber++;
      } else {
        //check for variable names on each line
        // if(functionCheck) variables.push(arguments)
        let foundVariables = minty.findVariables(line);
        if (foundVariables) {
          if (bracketMonitor.length) {
            activeParams[activeParams.length - 1].push(foundVariables);
          } else {
            variables.push(foundVariables);
          }
        }
        if (bracketMonitor.length) {
          minty.bracketWatch(line, bracketMonitor, lineNumber);
          activeParams.length = bracketMonitor.length;
        }
        //flatten array of variables
        variables = _.flattenDeep(variables);
        //create new line
        minty.createLine(file, injectedCodeLines, _.flattenDeep(variables.concat(activeParams)).slice(0), line, lineNumber);
        lineNumber++;
      }

    } else {
      injectedCodeLines.push('\n');
      lineNumber++;
    }
  });
  callback(null, injectedCodeLines.join(''), file);
};



minty.bracketWatch = function bracketWatch(line, bracketMonitor, lineNumber) {
  "use strict";
  let bracketsOpen = line.replace(/[^\{]/g, '')
    .split('');
  let bracketsClose = line.replace(/[^\}]/g, '')
    .split('');
  if (bracketsOpen.length) {
    bracketMonitor[bracketMonitor.length - 1] += bracketsOpen.length;
  }
  if (bracketsClose.length) {
    bracketMonitor[bracketMonitor.length - 1] -= bracketsClose.length;
  }
  while (bracketMonitor[bracketMonitor.length - 1] <= 0 && bracketMonitor.length) {
    let subNum = bracketMonitor[bracketMonitor.length - 1];
    bracketMonitor.splice(bracketMonitor.length - 1, 1);
    if (bracketMonitor.length) bracketMonitor[bracketMonitor.length - 1] += subNum;
  }
};


minty.functionCheck = function functionCheck(line) {
  return line.indexOf('function') !== -1 || line.indexOf('=>') !== -1 || line.indexOf('for') !== -1 || line.indexOf('while') !== -1;
};


minty.findParams = function findParams(line) {
  "use strict";
  let params;
  if (line.indexOf('function') !== -1) {
    params = line.slice(line.indexOf('(') + 1, line.indexOf(')')).match(/([^\s,]+)/g);
  } else if (line.indexOf('=>') !== -1) {
    params = line.match(/(?=\()(.*)(?=\=>)/g)
      .join()
      .replace(/\(+/g, '')
      .replace(/\)+/g, '')
      .replace(/\s+/g, '')
      .split(',');
  } else if (line.indexOf('for') !== -1 || line.indexOf('while') !== -1) {
    params = minty.findVariables(line);
  }
  return params || [];
};



minty.findVariables = function findVariables(line) {
  "use strict";
  let foundVariables = line.match(/(?=(var|const|let))(.*)/g);
  //remove var/const/let and white space from variable name
  if (foundVariables) {
    foundVariables = foundVariables.join('')
      .replace(/(const|var|let)+/gm, '')
      .replace(/\;/gm, '')
      .replace(/(?=\=)(.*)(?=\,)/gm, '')
      .replace(/(?=\=)(.*)/gm, '')
      .replace(/\s+/gm, '')
      .split(',');
    return foundVariables;
  }
};




//inject new code into original code depending on if any variables exist
minty.createLine = function createLine(file, injectedCodeLines, variables, line, lineNumber) {
  "use strict";
  let injectCode;
  if (variables.length) {
    injectCode = `\nminty.variableLog(${lineNumber}, file, log, ${JSON.stringify(variables)}, ${variables.join(", ")});\n`;
  } else {
    injectCode = '\n';
  }
  return injectedCodeLines.push(line, injectCode);
};




minty.variableLog = function variableLog(lineNumber, file, log, variables) {
  //grab all values from code
  const args = Array.prototype.slice.call(arguments, 4);
  var returnValueObject = {
    file: file,
    line: lineNumber,
    variables: {}
  };
  for (var i in args) {
    //reference against variables array
    returnValueObject.variables[variables[i]] = args[i];
  }
  //return object into results array
  return log.push(returnValueObject);
};


minty.errorLineFind = function errorLineFind(js, resultsArray) {
  'use strict';
  let finalLine = resultsArray[resultsArray.length - 1].line;
  let errLine;
  js.split('\n')
    .forEach(line => {
      if (line.indexOf('minty.variableLog') !== -1) {
        let currLine = parseInt(line.slice(18));
        if (currLine > finalLine && !errLine) errLine = currLine;
      }
    });
  return errLine;
};



minty.run = function run(js, file) {
  'use strict';
  var log = [];
  // console.log(js);
  try {
    eval(js);
  } catch (err) {
    let errLine = minty.errorLineFind(js, log);
    log.push({
      line: errLine,
      variables: log[log.length - 1].variables,
      error: err.message
    });
  } finally {
    fs.readFile(file, (err, results) => {
      let output = {
        entry: file,
        code: results.toString(),
        log: log
      };
      fs.writeFile('output.json', JSON.stringify(output, (key, val) => {
        if (typeof val === 'function') {
          val = val.toString()
            .split('\n');
          val.forEach((line, i) => {
            if (line.indexOf('minty.variableLog') !== -1) {
              val.splice(i, 1);
            }
          });
          val = val.join('\n');
          return val;
        } else if (typeof val === 'undefined') {
          return 'undefined';
        }
        return val;
      }), err => {
        if (err) console.log(err);
        console.log('done');
      });
    });
  }
};




module.exports = minty;
