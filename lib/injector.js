'use strict';

const decomment = require('decomment');
const injectionLog = {};
const flattenDeep = require('./tools').flattenDeep;
let scope;
let injectCheck;
let specialVariablesLog;
let specialVariables;
let variables;

/**
* Function finds the scope of an object describing the current line of code
* If it creates a new scope, then it adds an array of the current level to the {@link #specialVariables} object
* If it closes a scope, then it pops the last array off of the {@link #specialVariables} object
* @param {object} lineInfo - the line of code being analyzed
* @event #specialVariables .push() or .pop()
* @returns {undefined} - undefined - this builds an external value
**/
function findScope(lineInfo) {
  if (!lineInfo) return;
  lineInfo.rulesFound.forEach(rule => {
    if (rule.rule === 'SCOPE' && rule.action === 'START') {
      if (lineInfo.scope) {
        scope.push(lineInfo.scope);
      } else {
        scope.push('');
      }
      specialVariables.push([]);
    }
    if (rule.rule === 'SCOPE' && rule.action === 'END') {
      scope.pop();
      specialVariables.pop();
    }
  });
}

/**
* Function looks at an object describing a line of Javascript
* and adds the variables found there to the scope within which that line executes
* @param {object} lineInfo - the line of code being analyzed
* @event add variables to {@link #specialVariables}
* @event add variables to {@link #variables}
* @returns {undefined} - undefined - this builds an external value
**/
function addVars(lineInfo) {
  if (!lineInfo || !lineInfo.variables) return;
  const line = lineInfo.variables;
  if (line.parameters) {
    specialVariables[specialVariables.length - 1] =
      specialVariables[specialVariables.length - 1].concat(line.parameters);
  }
  if (line.variables) {
    let currentScope;
    scope.forEach(block => {
      if (block) currentScope = block;
    });
    if (line.variables.kind === 'var' && currentScope === '_mintyGlobalScope') {
      variables = variables.concat(line.variables.names);
    } else {
      specialVariables[specialVariables.length - 1] =
        specialVariables[specialVariables.length - 1].concat(line.variables.names);
    }
  }
}

/**
* Function looks at an object describing a line of Javascript
* and reviews if it has triggered rules that end a scope.
* If it has triggered those rules, then it updates the {@link #injectCheck} array
* to add a flag to inject watching code; remove a flag; or flag to not inject
* @param {object} lineInfo - the line of code being analyzed
* @event add true or false, or pop the last item from, {@link #specialVariables}
* @returns {undefined} - undefined - this builds an external value
**/
function checkClosingLine(lineInfo, lineText) {
  if (lineInfo) {
    lineInfo.rulesFound.forEach(rule => {
      if (rule.action === 'START' && rule.rule === 'VOID') injectCheck.push(false);
      else if (rule.action === 'START' && rule.rule === 'SCOPE') {
        injectCheck.push(true);
      } else if (rule.action === 'END' && (rule.rule === 'VOID' || rule.rule === 'SCOPE')) {
        injectCheck.pop();
      }
    });
    return lineText.trim() === lineText.trim().replace(/[A-Za-z0-9]/g, '');
  }
  return undefined;
}

/**
* Function looks at a line, evaluates it against rules, and sees if it contains global variables
* @param {object} lineRules - rules describing the line to be analyzed
* @param {string} text - the line of code
* @param {number} index - the 0-based line number
* @event trigger {@link #findScope} on the lineRules
* @event trigger {@link #addVars} on the lineRules
* @event add the special (local to this block) variables to the {@link #specialVariablesLog}
* @returns {undefined} - undefined - this builds an external value
**/
function findGlobalVars(lineRules, line, index) {
  if (injectCheck[injectCheck.length - 1]) {
    findScope(lineRules);
    addVars(lineRules);
    if (specialVariables[0].length >= 1 || specialVariables.length > 1) {
      specialVariablesLog[index] = specialVariables.slice(0);
    }
  }
}
/**
* Function injects monitoring code into appropriate lines of the source JS
* @param {array} log - Running log of original code + injected code.
* @param {string} line - the original line of code
* @param {number} index - the 0-based line number
* @param {boolean} check - a flag to prevent or allow injection
* @param {array} lineRules - an array of rules that define where the monitoring code should be injected
*                            values: [SWAP, START, VOID, SCOPE]
* @param {number} closingLine - the 1-based line number on which the statement closes
* @event trigger adds line to the {@link #log} variable which will be turned back into a file and executed
* @returns {undefined} - undefined - this builds an external value
**/
function injector(log, line, index, check, lineRules, closingLine) {
  let currentScope;
  let returnStatement = false;
  let preVoidStatement = false;
  let lineSpecial;
  let globalVariables;
  let mintyLine;
  let lineCheck = check;
  let callExpressionAndCallback;
  scope.forEach(block => {
    if (block) currentScope = block;
  });
  if (specialVariablesLog[index] && specialVariablesLog[index].length) {
    lineSpecial = specialVariablesLog[index];
  } else {
    lineSpecial = undefined;
  }

  if (variables.length) globalVariables = variables;
  else {
    globalVariables = undefined;
  }

  mintyLine = `mintyLog(${index}, '${currentScope}',`
    + `${JSON.stringify(lineSpecial)}, ${JSON.stringify(variables)}`;

  if (lineSpecial) {
    const flatSpecial = flattenDeep(lineSpecial);
    if (flatSpecial.length) mintyLine += `,${flattenDeep(lineSpecial)}`;
  }

  if (globalVariables) {
    mintyLine += `, ${variables}`;
  }

  mintyLine += ');';
  if (lineRules) {
    lineRules.rulesFound.forEach(rule => {
      if (rule.rule === 'SWAP' && rule.action === 'START') {
        returnStatement = true;
      }
      if (rule.rule === 'VOID' && rule.action === 'START') {
        preVoidStatement = true;
        lineCheck = true;
      }
      if (rule.rule === 'SCOPE' && rule.action === 'START') {
        callExpressionAndCallback = true;
      }
    });
  }
  // console.log(line, lineRules)
  if ((!lineCheck || closingLine || line === '') && !returnStatement) log.push(`${line}`);
  else if (preVoidStatement && callExpressionAndCallback) {
    log.push(`${line}`, mintyLine);
  } else if (returnStatement) {
    log.push(mintyLine, `${line}`, mintyLine);
  } else if (preVoidStatement) {
    log.push(mintyLine, `${line}`);
  } else {
    log.push(`${line}`, mintyLine);
  }
}

/**
* Function parses the given text with the given rules
* @param {array} rules - The rules the code should be parsed with
* @param {string} text - the original code
* @returns {array} - an array of all of the lines of code, with the necessary
*                    injection code as well, for later execution
**/
function injectionEngine(rules, text) {
  injectionLog.log = [];
  injectionLog.globalVars = [];
  scope = ['_mintyGlobalScope'];
  injectCheck = [true];
  specialVariablesLog = {};
  specialVariables = [[]];
  variables = [];
  const reArrText = text.toString();
  const EOL = decomment.getEOL(reArrText);
  const textArray = decomment(reArrText, {
    space: true,
  })
    .split(EOL);
  textArray.forEach((line, i) => {
    if (line !== '') {
      findGlobalVars(rules[i], line, i);
    }
  });
  textArray.forEach((line, i) => {
    const closingLine = checkClosingLine(rules[i], line);
    findScope(rules[i]);
    // addVars(rules[i]);
    injector(injectionLog.log, line, i, injectCheck[injectCheck.length - 1], rules[i], closingLine);
  });
  injectionLog.globalVars = variables;
  return injectionLog;
}

module.exports = injectionEngine;
