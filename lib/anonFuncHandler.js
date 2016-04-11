function anonFuncCheck(jsText){
  if (jsText[9] === '(') {
    var namedAnonFunc = jsText.replace(jsText[8], ' anonymousFunc');
    return namedAnonFunc;
  } else {
    return jsText;
  }
}

module.exports = anonFuncCheck;
