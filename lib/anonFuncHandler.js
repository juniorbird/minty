function anonFuncCheck(jsText) {
  if (jsText[9] === '(') {
    const namedAnonFunc = jsText.replace(jsText[8], ' anonymousFunc');
    return namedAnonFunc;
  }
  return jsText;
}

module.exports = anonFuncCheck;
