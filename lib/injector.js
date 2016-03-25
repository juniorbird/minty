'use strict';

const injectedArray = [];
const specialVariables =[[]]
const variables = [];
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
  console.log(JSON.stringify(lineInfo))
  if (!lineInfo || !lineInfo.variables) return;
  const line = lineInfo.variables;
  const special = specialVariables[specialVariables.length - 1];
  if (line.parameters) {
    specialVariables[specialVariables.length - 1] = special.concat(line.parameters);
  }
  if(line.variables) {
  }
}

function injector(rules, text) {
  // console.log(JSON.stringify(rules))
  const textArray = text.toString().split(/\r\n|\r|\n/g);
  textArray.forEach((line, i) => {
    findScope(rules[i]);
    addVars(rules[i]);
    // console.log(line, i, specialVariables)
  });
}

module.exports = injector;
