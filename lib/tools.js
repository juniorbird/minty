'use strict';

const tools = {};

tools.flattenDeep = function flattenDeep(array) {
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
};


module.exports = tools;
