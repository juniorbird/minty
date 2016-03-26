'use strict';

const decomment = require('decomment');
const injectCheck = [true];
const injectionLog = [];
const specialVariablesLog = {};
const specialVariables = [[]];
let variables = [];
const scope = ['global'];


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
    specialVariables[specialVariables.length - 1] = specialVariables[specialVariables.length - 1].concat(line.parameters);
  }
  if (line.variables) {
    let currentScope;
    scope.forEach(block => {
      if (block) currentScope = block;
    });
    if (line.variables.kind === 'var' && currentScope === 'global') {
      variables = variables.concat(line.variables.names);
    } else {
      specialVariables[specialVariables.length - 1] = specialVariables[specialVariables.length - 1].concat(line.variables.names);
    }
  }
}

function checkForInject(lineInfo) {
  if (!lineInfo) return;
  lineInfo.rulesFound.forEach(rule => {
    if (rule.action === 'START' && rule.rule === 'VOID') injectCheck.push(false);
    else if (rule.action === 'START' && rule.rule === 'SCOPE') {
      injectCheck.push(true);
    } else if (rule.action === 'END' && (rule.rule === 'VOID' || rule.rule === 'SCOPE')) {
      injectCheck.pop();
    }
  });
}

function flattenDeep(array) {
  let flattenArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.constructor === Array) {
      flattenArray = flattenArray.concat(flattenDeep(element));
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
}

function injector(lineRules, line, index) {
  if (injectCheck[injectCheck.length - 1]) {
    findScope(lineRules);
    addVars(lineRules);
    if (specialVariables.length >= 1) {
      const flatVars = flattenDeep(specialVariables);
      specialVariablesLog[index] = flatVars;
    }
  }
}

function concatVariables(log, line, index, check) {
  let currentScope;
  scope.forEach(block => {
    if (block) currentScope = block;
  });
  if (!check) log.push(`${line}`);
  else {
    if (line !== '') {
      let lineSpecial;
      let globalVariables;
      if (specialVariablesLog[index] && specialVariablesLog[index].length) lineSpecial = specialVariablesLog[index];
      else {
        lineSpecial = undefined;
      }
      if (variables.length) globalVariables = variables;
      else {
        globalVariables = undefined;
      }
      let mintyLine = `mintyLog(${index}, '${currentScope}', ${JSON.stringify(lineSpecial)}, ${JSON.stringify(variables)}`;
      if (lineSpecial) {
        mintyLine += `,${lineSpecial}`;
      }
      if (globalVariables) {
        mintyLine += `, ${variables}`;
      }
      mintyLine += ')';
      log.push(`${line}`, mintyLine);
    } else {
      log.push('\n');
    }
  }
}


function injectionEngine(rules, text) {
  const reArrText = text.toString();
  const EOL = decomment.getEOL(reArrText);
  const textArray = decomment(reArrText, { space: true })
    .split(EOL);
  textArray.forEach((line, i) => {
    if (line !== '') {
      injector(rules[i], line, i);
    }
  });
  textArray.forEach((line, i) => {
    checkForInject(rules[i]);
    findScope(rules[i]);
    concatVariables(injectionLog, line, i, injectCheck[injectCheck.length - 1]);
  });
  return injectionLog.join('\n');
}

module.exports = injectionEngine;
