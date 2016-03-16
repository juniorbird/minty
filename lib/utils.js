const fs = require('fs');
const _ = require('lodash');
const decomment = require('decomment');
const path = require('path');
const appRoot = require('app-root-path');



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
  const EOL = decomment.getEOL(results);
  results = results.split(EOL);
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
    if (minty.functionAndLoopCheck(line)) {
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
        // if(functionAndLoopCheck) variables.push(arguments)
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
  minty.functionLineSwap(injectedCodeLines);
  minty.returnLineSwap(injectedCodeLines);
  callback(null, injectedCodeLines.join(''), file);
};


//swap check line for when function is called
minty.functionLineSwap = function functionLineSwap(injectedCodeLines) {
  var functionLog = {};
  for (var i = 0; i < injectedCodeLines.length; i++) {
    if (injectedCodeLines[i].indexOf('minty.variableLog') === -1) {
      if (injectedCodeLines[i].indexOf('function') !== -1) {
        var functionName = injectedCodeLines[i].match(/(?=function)(.*)(?=\()/gm)
          .join('')
          .replace(/function/gm, '')
          .trim();
        if (functionName === '') {
          functionName = injectedCodeLines[i].match(/(?=(const|var|let))(.*)(?=\=)/gm)
            .join('')
            .replace(/(const|var|let)/gm, '')
            .trim();
        }
        if (functionName) {
          var paramNums = minty.findParams(injectedCodeLines[i]).length;
          functionLog[functionName] = paramNums;
        }
      } else {
        var commas = injectedCodeLines[i].match(/,+/gm);
        if (commas) {
          commas = commas.join('').length;
        }
        var parens = injectedCodeLines[i].match(/\(+|\)+/gm);
        if (parens) {
          parens = parens.join('').length;
        }
        if (parens === 2) {
          for (var keys in functionLog) {
            if (injectedCodeLines[i].indexOf(keys) !== -1 && (functionLog[keys] === commas + 1 || functionLog[keys] === 0)) {
              var lineStore = injectedCodeLines[i];
              injectedCodeLines[i] = injectedCodeLines[i + 1];
              injectedCodeLines[i + 1] = lineStore;
              i++;
              break;
            }
          }
        }
      }
    }
  }
};



minty.returnLineSwap = function returnLineSwap(injectedCodeLines) {
  'use strict';
  for (var i = 0; i < injectedCodeLines.length; i++) {
    if (injectedCodeLines[i].indexOf('minty.variableLog') === -1) {
      if (injectedCodeLines[i].indexOf('return') !== -1) {
        let returnStatement = injectedCodeLines[i].trim().match(/[^return](.*)/g)
          .join('')
          .replace(/\;/gm, '')
          .trim();
        if(!returnStatement) returnStatement = undefined;
        let mintyLine = injectedCodeLines[i + 1].split(',');
        let beginLine = mintyLine.slice(0, 3);
        let endLine = mintyLine.slice(3);
        for(var j in endLine) {
          if(endLine[j].indexOf(']') !== -1) {
            endLine[j] = endLine[j].replace(/\]/gm, '');
            endLine.splice(parseInt(j)+1, 0, '"return"]');
            break;
          }
        }
        endLine[endLine.length -1] =
            endLine[endLine.length -1]
              .replace(/(?=\))(.*)/gm, '')
              .replace(/\r?\n|\r/g, '');
        endLine.push(` ${returnStatement});\n`);
        mintyLine = beginLine.concat(endLine).join();
        let tempLine = injectedCodeLines[i];
        injectedCodeLines[i] = mintyLine;
        injectedCodeLines[i+1] = tempLine;
        i++;
      }
    }
  }
};



//while function or iterative loop is still 'open', bracketWatch will monitor the brackets and remove any params/variables delcared in the loop after closing
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

//check for 'function', '=>', 'for', or 'while'
minty.functionAndLoopCheck = function functionAndLoopCheck(line) {
  return line.indexOf('function') !== -1 || line.indexOf('=>') !== -1 || line.indexOf('for') !== -1 || line.indexOf('while') !== -1;
};

//finds any parameters declared by a function
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


//finds all variables on each line. Lots of regex, a lot of room for cleanup here
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
      .replace(/(?=\,)(.*)(?=\})/gm, '')
      .replace(/(?=\,)(.*)(?=\])/gm, '')
      .replace(/\]|\}/gm, '')
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



//finds the variable names and current value, places into output object, returnValueObject and is pushed into the final array
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

//find line at which an error occured
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


//run the program, evals js after injecting monitor code, catches errors and outputs to an array
minty.run = function run(js, file) {
  'use strict';
  var log = [];
  // console.log(js);
  try {
    eval(js);
  } catch (err) {
    let errLine = minty.errorLineFind(js, log);
    log.push({
      file: file,
      line: errLine,
      variables: log[log.length - 1].variables,
      error: err.message
    });
  } finally {
    fs.mkdir(appRoot + '/minty', (err) => {
      fs.readFile(path.join(__dirname, file), (err, results) => {
        let output = {
          entry: file,
          log: log
        };
        output[file] = results.toString();
        fs.readFile(path.join(__dirname, '/mintyTemplates/mintyVisTemplate.js'), (err, templateResults) => {
          const logStr = JSON.stringify(output, (key, val) => {
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
          });
          fs.writeFile(appRoot + '/minty/mintyVis.js', `var data = ${logStr} \n ${templateResults}`, (err) => {
            fs.createReadStream(path.join(__dirname, '/mintyTemplates/index.html')).pipe(fs.createWriteStream(appRoot + '/minty/minty.html'));
            console.log('done');
          });
        });
      });
    });
  }
};

module.exports = minty;
