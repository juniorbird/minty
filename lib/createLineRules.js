'use strict';

const lineActivity = {};

function addLines(type, rule, cluster) {
  cluster.forEach(group => {
    if (!lineActivity[group.startLine]) lineActivity[group.startLine] = {};
    if (!lineActivity[group.startLine].rulesFound) lineActivity[group.startLine].rulesFound = [];
    if (rule) {
      lineActivity[group.startLine].rulesFound.push(['START', rule, type]);
    }

    if (!lineActivity[group.endLine]) lineActivity[group.endLine] = {};
    if (!lineActivity[group.endLine].rulesFound) lineActivity[group.endLine].rulesFound = [];
    if (rule) {
      lineActivity[group.endLine].rulesFound.push(['END', rule, type]);
    }
  });
}

function addVariables(cluster) {
  cluster.forEach(group => {
    if (!lineActivity[group.startLine].variables) lineActivity[group.startLine].variables = {};
    if (group.parameters) {
      lineActivity[group.startLine].variables.parameters = group.parameters;
    }
    if (group.variables) {
      lineActivity[group.startLine].variables.variables = {
        names: group.variables,
        kind: group.kind,
      };
    }
  });
}

function addScopeName(cluster) {
  cluster.forEach(group => {
    const line = lineActivity[group.startLine];
    if (group.name) {
      line.scope = group.name;
    } else if (group.parameters) {
      if (line.variables.variables) {
        line.scope = line.variables.variables.names.join('');
      } else {
        line.scope = 'anonymous function';
      }
    }
  });
}

function ruler(parsed) {
  Object.keys(parsed).forEach(type => {
    switch (type) {
      case 'BreakStatement':
      case 'ReturnStatement':
      case 'YieldExpression':
        addLines(type, 'SWAP', parsed[type]);
        break;
      case 'FunctionDeclaration':
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
        // console.log(parsed[type]);
        addLines(type, 'SCOPE', parsed[type]);
        addVariables(parsed[type]);
        addScopeName(parsed[type]);
        break;
      case 'VariableDeclaration':
        addLines(type, null, parsed[type]);
        addVariables(parsed[type]);
        break;
      case 'CallExpression':
        addLines(type, 'VOID', parsed[type]);
        break;
      default:
        addLines(type, 'SCOPE', parsed[type]);
        break;
    }
  });
  return lineActivity;
}

module.exports = ruler;
