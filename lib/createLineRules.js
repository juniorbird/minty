'use strict';

const lineActivity = {};

function addLines(type, rule, cluster) {
  cluster.forEach(group => {
    if (!lineActivity[group.startLine - 1]) lineActivity[group.startLine - 1] = {};
    if (!lineActivity[group.startLine - 1].rulesFound) lineActivity[group.startLine - 1].rulesFound = [];
    if (rule) {
      lineActivity[group.startLine - 1].rulesFound.push({ action: 'START', rule, type });
    }

    if (!lineActivity[group.endLine - 1]) lineActivity[group.endLine - 1] = {};
    if (!lineActivity[group.endLine - 1].rulesFound) lineActivity[group.endLine - 1].rulesFound = [];
    if (rule) {
      lineActivity[group.endLine - 1].rulesFound.push({ action: 'END', rule, type });
    }
  });
}

function addVariables(cluster) {
  cluster.forEach(group => {
    const line = lineActivity[group.startLine - 1];
    if (!line.variables) line.variables = {};
    if (group.parameters) {
      line.variables.parameters = group.parameters;
    }
    if (group.variables) {
      line.variables.variables = {
        names: group.variables,
        kind: group.kind,
      };
    }
  });
}

function addScopeName(cluster) {
  cluster.forEach(group => {
    const line = lineActivity[group.startLine - 1];
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
