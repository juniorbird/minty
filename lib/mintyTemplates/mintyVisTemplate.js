
$(document).ready(() => {

  var indexCounter = -1,
      dataLength = data.log.length,
      watchedVariables,
      completeVariableList = data.log[dataLength - 1].variables,
      declaredVariables = Object.keys(completeVariableList),
      oldIndex,
      newIndex;

  // appending variable names to the DOM - all their values start out as undefined
  for (var key in completeVariableList) {
    $('tbody').append(`<tr id=${key}></tr>`);
    $(`#${key}`).append(`<td>${key}</td>`).append(`<td id=${key +'val'} class="variables">undefined</td>`);
  }


  disableBackFirstButtons(true);
  $('#step').text(`Step 0 of ${dataLength}`);
//
  $('#forward').click((e) => {

    if (indexCounter < dataLength - 1) {
      oldIndex = indexCounter;
      indexCounter++;
      newIndex = indexCounter;
      moveLineIndicator(newIndex, oldIndex, data.log);

      disableBackFirstButtons(false);
      $('#step').text(`Step ${indexCounter+1} of ${dataLength}`);

    }


    if (indexCounter === dataLength - 1)
      disableForwardLastButtons(true);

    //updating the variable values
    watchedVariables = data.log[indexCounter].variables;
    if (data.log[indexCounter]) {
      // console.log('indexCounter', indexCounter, 'variables:', data[indexCounter]);
      for (var key in watchedVariables) {
        updateVariables(key, watchedVariables);
      }
    }
  });

  $('#back').click(() => {

    var watchedVariables,
        decVar;

    if (indexCounter > -1) {
      oldIndex = indexCounter;
      indexCounter--;
      newIndex = indexCounter;
      moveLineIndicator(newIndex, oldIndex, data.log);
      disableForwardLastButtons(false);
      $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);

    }
    //make all values revert back to undefined when the user clicks back all the way to the beginning with the back button
    if (indexCounter === -1) {
      makeValuesUndefined();
      return;
    }

    //when user clicks back, this will update the DOM with new values
    watchedVariables = data.log[indexCounter].variables;
    if (data.log[indexCounter]) {
      // console.log('indexCounter', indexCounter, 'old line:', data[oldIndex].line, 'new line:', data[newIndex].line, 'variables:', watchedVariables);
      for (var key in watchedVariables) {
        updateVariables(key, watchedVariabes);
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

    oldIndex = indexCounter;
    indexCounter = -1;
    newIndex = indexCounter;
    moveLineIndicator(newIndex, oldIndex, data.log);
    makeValuesUndefined();
    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
  });

  //display variables and their values from the last index of the data set
  $('#last').click(() => {
    var variable;
    if (indexCounter === -1)
      disableBackFirstButtons(false);

    oldIndex = indexCounter;
    indexCounter = dataLength - 1;
    newIndex = indexCounter;
    moveLineIndicator(newIndex, oldIndex, data.log);
    $('.variables').each((i, elem) => {
      variable = completeVariableList[declaredVariables[i]];
      $(elem).text(`${variable}`);
    });
    disableForwardLastButtons(true);
    $('#step').text(`Step ${indexCounter + 1} of ${dataLength}`);
  });

});

//updates variables when user clicks forward or back button
function updateVariables(key, watchedVariables) {
  $(`#${key + 'val'}`).remove();
  if (watchedVariables[key] instanceof Array) {
    $('#main-table').remove();
    $('body').append($('<table/>', {'id': `main-table`}));
    $('.array-values').remove();
    $(`#${key}`).append(`<td id="${key + 'val'}" class="variables"></td>`);
    handleArrays(key, watchedVariables[key]);
  } else
    $(`#${key}`).append(`<td id="${key + 'val'}" class="variables">${watchedVariables[key]}</td>`);
};


function handleArrays(key, array, index) {
  var counter = 0;

  function inner (key, array, index) {
    counter++;
    $('#main-table').append(
      $('<table/>', {'id': `array-table${counter}`}).append(
        $('<tbody/>').append(
          $('<tr/>', {'id' : `array-display${counter}`})
        )
      )
    );

    if (array.length === 0)
      $(`#array-display${counter}`).append('<td class="array-values">Empty Array</td>');

    $(array).each((i, elem) => {
      if (elem instanceof Array) {
        // inner(key, elem, counter);
        $(`#array-display${counter}`).append(`<td class="array-values"></td>`);
      }
      else $(`#array-display${counter}`).append(`<td class="array-values">${elem}</td>`);
    });
  }
  inner(key, array, index);
};

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
