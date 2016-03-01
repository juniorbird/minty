const myConst = 47;

var myVar = true;

for (var i = 0; i < 10; i++) {
  console.log(i);
}

function myFunc(paramA, paramB) {
  let localLet = 'hello';

  localLet = localLet + ' ' + paramA;
  localLet = `template strings ${localLet} ${paramB}`;

  return localLet;
}
