var data = [ { line: 1, variables: { one: undefined, two: 2 } },
  { line: 2, variables: { one: undefined, two: 2, four: 2 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 0 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 0 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 0 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 1 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 1 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 1 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 2 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 2 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 2 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 3 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 3 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 3 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 4 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 4 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 4 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 5 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 5 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 5 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 6 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 6 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 6 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 7 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 7 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 7 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 8 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 8 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 8 } },
  { line: 3, variables: { one: undefined, two: 2, four: 2, i: 9 } },
  { line: 4, variables: { one: undefined, two: 2, four: 2, i: 9 } },
  { line: 5, variables: { one: undefined, two: 2, four: 2, i: 9 } },
  { line: 6, variables: { one: undefined, two: 2, four: 2, i: 10 } },
  { line: 7, variables: { one: undefined, two: 2, four: 2, i: 0 } },
  { line: 7, variables: { one: undefined, two: 2, four: 2, i: 1 } },
  { line: 7, variables: { one: undefined, two: 2, four: 2, i: 2 } },
  { line: 7, variables: { one: undefined, two: 2, four: 2, i: 3 } },
  { line: 7, variables: { one: undefined, two: 2, four: 2, i: 4 } },
  { line: 8, variables: { one: undefined, two: 2, four: 2, i: 5 } },
  { line: 11, variables: { one: undefined, two: 2, four: 2, i: 5 } },
  { line: 12, variables: { one: undefined, two: 2, four: 2, i: 5, what: 'what' } },
  { line: 13, variables: { one: undefined, two: 2, four: 2, i: 5, what: 'what', test: 'hello' } },
  { line: 14, variables: { one: undefined, two: 2, four: 2, i: 5, what: 'what', test: 'hello buddy' } },
  { line: 15,  variables: { one: undefined,two: 2, four: 2, i: 5, what: 'what', test: 'hello buddy', hello: 'hi' } } ]
//data is an array with objects
//




$(document).ready(() => {

  var variableWatch = data[data.length - 1];
  // appending variable names to the DOM - all their values start out as undefined
  for (var key in variableWatch.variables) {
    $('tbody').append(`<tr id=${key}></tr>`);
    $(`#${key}`).append(`<td>${key}</td>`).append(`<td id=${key +'val'}>undefined</td>`);
  }
  $('#back').prop('disabled', true);

  var index = [],
      indexCounter = -1,
      dataLength = data.length,
      watchedVariablesObj;

  $('#forward').click((e) => {
    if (indexCounter < dataLength - 1) {
      indexCounter++;
      index.push(indexCounter);
      $('#back').prop('disabled', false);
    }
    if (indexCounter === dataLength - 1)
      $('#forward').prop('disabled', true);

    //updating the variable values
    watchedVariables = data[indexCounter].variables;
    if (data[indexCounter]) {
      for (var key in watchedVariables) {
        $(`#${key + 'val'}`).remove();
        $(`#${key}`).append(`<td id="${key + 'val'}" class="variables">${watchedVariables[key]}</td>`);
      }
    }
  });

  $('#back').click(() => {
    var watchedVariablesObj,
        declaredVariables = Object.keys(data[data.length - 1].variables),
        decVar;
    if (indexCounter > -1) {
      indexCounter--;
      index.pop();
      $('#forward').prop('disabled', false);
    }
    //making sure all the values revert back to undefined when the user clicks back all the way to the beginning
    if (indexCounter === -1) {
      console.log('inside if', indexCounter)
      $('.variables').each((i, elem) => {
        console.log('in each', elem)
        if ($(elem).text() !== 'undefined')
          $(elem).text('undefined');
      });
      $('#back').prop('disabled', true);
      return;
    }

    //when user clicks back, this will update the DOM with new values
    watchedVariables = data[indexCounter].variables;
    if (data[indexCounter]) {
      for (var key in watchedVariables) {
        $(`#${key + 'val'}`).remove();
        $(`#${key}`).append(`<td id="${key + 'val'}" class="variables">${watchedVariables[key]}</td>`);
      }
    }

    // if user is analyzing a line of code and some of the variables are no longer on the watch list, those variables will get the value undefined
    for (var i = 0, n = declaredVariables.length; i < n; i ++) {
      declaredVar = declaredVariables[i]
      if (!watchedVariables[declaredVar]) {
        $(`#${declaredVar + 'val'}`).remove();
        $(`#${declaredVar}`).append(`<td id="${declaredVar + 'val'}">undefined</td>`);
      }
    }
  });
});
