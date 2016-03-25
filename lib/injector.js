'use strict';
const decomment = require('decomment');
const injectedArray = [];
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
  'use strict';
  // console.log(JSON.stringify(lineInfo))
  if (!lineInfo || !lineInfo.variables) return;
  const line = lineInfo.variables;
  const special = specialVariables[specialVariables.length - 1];
  if (line.parameters) {
    specialVariables[specialVariables.length - 1] = special.concat(line.parameters);
  }
  if (line.variables) {
    let currentScope;
    scope.forEach(block => {
      if (block) currentScope = block;
    });
    if (line.variables.kind === 'var' && currentScope === 'global') {
      variables = variables.concat(line.variables.names);
    } else {
      specialVariables[specialVariables.length - 1] = special.concat(line.variables.names);
    }
  }
}


function injector(rules, text) {
  console.log(JSON.stringify(rules))
  const EOL = decomment.getEOL(text.toString());
  const textArray = decomment(text.toString(), { space: true })
    .split(EOL);
  log(textArray.join('\n'))
  textArray.forEach((line, i) => {
    if (line === '') return;

    findScope(rules[i]);
    addVars(rules[i]);
  });
}

module.exports = injector;
