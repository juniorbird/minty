function anonFuncCheck(jsText){
  if (jsText[9] === '(') {
    var anon = jsText.replace(jsText[8], ' anonymousFunc');
    return anon;
  } else {
    return jsText;
  }
}

module.exports = anonFuncCheck;
