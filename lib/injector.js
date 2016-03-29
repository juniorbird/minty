'use strict';

const decomment = require('decomment');
const injectionLog = {};
const flattenDeep = require('./tools').flattenDeep;
let scope;
let injectCheck;
let specialVariablesLog;
let specialVariables;
let variables;


function findScope(lineInfo) {
  if (!lineInfo) return;
  lineInfo.rulesFound.forEach(rule => {
    if (rule.rule === 'SCOPE' && rule.action === 'START') {
      if (lineInfo.scope) scope.push(lineInfo.scope);
      else {
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
    console.log(currentScope)
    if (line.variables.kind === 'var' && currentScope === '_mintyGlobalScope') {
      variables = variables.concat(line.variables.names);
    } else {
      specialVariables[specialVariables.length - 1] =
        specialVariables[specialVariables.length - 1].concat(line.variables.names);
    }
  }
}

function checkForInject(lineInfo, lineText) {
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

function findGlobalVars(lineRules, line, index) {
  if (injectCheck[injectCheck.length - 1]) {
    findScope(lineRules);
    addVars(lineRules);
    if (specialVariables.length >= 1) {
      const flatVars = flattenDeep(specialVariables);
      specialVariablesLog[index] = flatVars;
    }
  }
}

function injector(log, line, index, check, lineRules, closingLine) {
  let currentScope;
  let returnStatement = false;
  let preVoidStatement = false;
  let lineSpecial;
  let globalVariables;
  let mintyLine;
  let lineCheck = check;
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

  mintyLine = `mintyLog(${index}, '${currentScope}',
    ${JSON.stringify(lineSpecial)}, ${JSON.stringify(variables)}`;

  if (lineSpecial) {
    mintyLine += `,${lineSpecial}`;
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
    });
  }
  if (!lineCheck || closingLine || line === '') log.push(`${line}`);
  else if (returnStatement) {
    log.push(mintyLine, `${line}`, mintyLine);
  } else if (preVoidStatement) {
    log.push(mintyLine, `${line}`);
    lineCheck = false;
  } else {
    log.push(`${line}`, mintyLine);
  }
}

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
    const closingLine = checkForInject(rules[i], line);
    findScope(rules[i]);
    addVars(rules[i]);
    injector(injectionLog.log, line, i, injectCheck[injectCheck.length - 1], rules[i], closingLine);
  });
  injectionLog.globalVars = variables;
  return injectionLog;
}

module.exports = injectionEngine;
