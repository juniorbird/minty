$(document).ready(() => {
  var index = [],
      indexCounter = -1,
      dataLength = data.length,
      watchedVariablesObj,
      completeVariableList = data[dataLength - 1].variables,
      declaredVariables = Object.keys(completeVariableList);

  // appending variable names to the DOM - all their values start out as undefined
  for (var key in completeVariableList) {
    $('tbody').append(`<tr id=${key}></tr>`);
    $(`#${key}`).append(`<td>${key}</td>`).append(`<td id=${key +'val'} class="variables">undefined</td>`);
  }

  disableBackFirstButtons(true);
  $('#step').text(`Step 0 of ${dataLength}`);

  $('#forward').click((e) => {
    if (indexCounter < dataLength - 1) {
      indexCounter++;
      index.push(indexCounter);
      disableBackFirstButtons(false);
      $('#step').text(`Step ${indexCounter+1} of ${dataLength}`);
    }
    if (indexCounter === dataLength - 1)
      disableForwardLastButtons(true);

    //updating the variable values
    watchedVariables = data[indexCounter].variables;
    if (data[indexCounter]) {
      for (var key in watchedVariables) {

        updateVariables(key);
      }
    }
  });

  $('#back').click(() => {
    var watchedVariablesObj,
        decVar;
    if (indexCounter > -1) {
      indexCounter--;
      index.pop();
      disableForwardLastButtons(false);
      $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
    }
    //make all values revert back to undefined when the user clicks back all the way to the beginning with the back button
    if (indexCounter === -1) {
      makeValuesUndefined();
      return;
    }

    //when user clicks back, this will update the DOM with new values
    watchedVariables = data[indexCounter].variables;
    if (data[indexCounter]) {
      for (var key in watchedVariables) {
        updateVariables(key);
      }
    }

    // if user is analyzing a line of code and some of the variables are no longer on the watch list, those variables will get the value undefined
    for (var i = 0, n = declaredVariables.length; i < n; i ++) {
      declaredVar = declaredVariables[i]
      if (!watchedVariables[declaredVar]) {
        if (watchedVariables[declaredVar] === 0) return;
        $(`#${declaredVar + 'val'}`).remove();
        $(`#${declaredVar}`).append(`<td id="${declaredVar + 'val'}" class="variables">undefined</td>`);
      }
    }
  });

//make all values revert back to undefined when the user clicks first
  $('#first').click(() => {
    if (indexCounter === dataLength - 1)
      disableForwardLastButtons(false);

    indexCounter = -1;
    makeValuesUndefined();
    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
  });

  //display variables and their values from the last index of the data set
  $('#last').click(() => {
    var variable;
    if (indexCounter === -1)
      disableBackFirstButtons(false);

    indexCounter = dataLength - 1;
    $('.variables').each((i, elem) => {
      variable = completeVariableList[declaredVariables[i]];
      $(elem).text(`${variable}`);
    });
    disableForwardLastButtons(true);
    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
  });

});

//updates variables when user clicks forward or back button
function updateVariables(key) {
  $(`#${key + 'val'}`).remove();
  if (watchedVariables[key] instanceof Array) {
    $('body').append('<table id="array-table"></table>')
      .append('<tbody></tbody>')
      .append('<tr id="array-display"></tr>');
    $('.array-values').remove();
    handleArrays(key, watchedVariables[key]);

  } else
    $(`#${key}`).append(`<td id="${key + 'val'}" class="variables">${watchedVariables[key]}</td>`);

};

function handleArrays(key, array) {
  if (array.length === 0)
    $('#array-display').append('<td class="array-values">Empty Array</td>');

  $(array).each((i, elem) => {
    if (elem instanceof Array) handleArrays(key, elem);
    else $('#array-display').append(`<td class="array-values">${elem}</td>`);
  });
}

function disableForwardLastButtons(value) {
  $('#forward').prop('disabled', value);
  $('#last').prop('disabled', value);
};

function disableBackFirstButtons(value) {
  $('#back').prop('disabled', value);
  $('#first').prop('disabled', value);
};

function makeValuesUndefined() {
  $('.variables').each((i, elem) => {
    if ($(elem).text() !== 'undefined')
      $(elem).text('undefined');
  });
  disableBackFirstButtons(true)
};
