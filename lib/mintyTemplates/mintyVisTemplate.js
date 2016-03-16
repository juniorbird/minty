
$(document).ready(() => {

  var indexCounter = -1,
      dataLength = data.log.length,
      watchedVariables,
      completeVariableList = {},
      declaredVariables = Object.keys(completeVariableList),
      oldIndex,
      newIndex;

  data.log.forEach((elem) => {
    for (var variables in elem.variables) {
      completeVariableList[variables] = undefined;
    }
  });
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
    // if user is analyzing a line of code and some of the variables are no longer on the watch list, those variables will get the value undefined
    varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter)
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
    varsNoLongerOnWatchList(declaredVariables, watchedVariables, indexCounter);
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
//updates variables when user clicks forward or back button
function updateVariables(variable, watchedVariables) {
  $(`#${variable + 'val'}`).remove();
  if (watchedVariables[variable] instanceof Array) {
    //i think i want to remove the children
    var handledArray = handleArrays(watchedVariables[variable], 0);
    displayArray(handledArray, variable);
  } else
    $(`#${variable}`).append(`<td id="${variable + 'val'}" class="variables">${watchedVariables[variable]}</td>`);
};

function handleArrays(array, depth) {
  var flattenedArray = [];
  var flattenedObj = {};
  var howNested = []
  function inner(array, depth) {
    var arr = [];
    array.forEach((elem) => {
      if (elem instanceof Array) arr.push("array");
      else arr.push(elem)
    })
    flattenedArray.push(depth, arr);
    if (!flattenedObj[depth]) flattenedObj[depth] = [];
    flattenedObj[depth].push(arr);

    howNested.push(depth);
    // i want to continue if the element is a number, string or variable, pretty anything not an array or object
    for (var i = 0, n = array.length; i < n; i ++) {
      if (typeof array[i] === 'number') continue;
      if (array[i] instanceof Array) {
        depth ++;
        inner(array[i], depth);
      }
      depth --;
    }
  }
  inner(array, depth);
  return flattenedObj;
}

function displayArray(nestedArrays, variable) {
  console.log(nestedArrays);

  $(`.array-table-${variable}`).remove();
  // $(`#${variable}`).append(`<td id="${variable + 'val'}" class="variables"></td>`);
  //
  $('body').append($('<table/>', {'id': `main-array-table`}));
  $('#main-array-table').append(
    $('<table/>', {'id': `array-table-${variable}`}).append(
      $('<tbody/>'), {'id': `array-body${variable}`}
    )
  );

  //    .append(
  //       $('<tr/>', {'id' : `array-display-row${counter}`})
  //     )
  // console.log('obji', nestedArrays);
  //
  // var numberOfLevels = Object.keys(nestedArrays).length;
  // for (var i = 0; i < numberOfLevels; i ++) {
  //   arraysAtDepthX = nestedArrays[i];
  //   arraysAtDepthX.forEach(array => {
  //     console.log(array);
  //     array.forEach(elem => {
  //       if (elem !== "array") {
  //
  //       }
  //     });
  //   });
  // }

  var numberOfLevels = Object.keys(nestedArrays);
  numberOfLevels.forEach((index) => {
    nestedArrays[index].forEach((array) => {
      array.forEach(elem => {
        console.log(elem);
      });
    });
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

function varsNoLongerOnWatchList(declaredVariables, watchedVariables, index) {
  for (var i = 0, n = declaredVariables.length; i < n; i ++) {
    declaredVar = declaredVariables[i]
    if (watchedVariables[declaredVar] === 0) return;
    if (!watchedVariables[declaredVar]) {
      $(`#${declaredVar + 'val'}`).remove();
      $(`#${declaredVar}`).append(`<td id="${declaredVar + 'val'}" class="variables">undefined</td>`);
    }
  }
}
