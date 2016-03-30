'use strict';

const _eval = require('eval');
const fs = require('fs');
const appRoot = require('app-root-path');
const path = require('path');

let filename;
const log = [];

function mintyLog(lineNumber, scope, special, variables) {
  const args = Array.prototype.slice.call(arguments, 4);
  const retObj = {
    file: filename,
    line: lineNumber,
    variables: {
      special: {},
      global: {},
    },
    scope: scope,
  };

  function variableAdd(type, key) {
    if (type) {
      while (type.length) {
        retObj.variables[key][type[0]] = args[0];
        args.splice(0, 1);
        type.splice(0, 1);
      }
    }
  }
  variableAdd(special, 'special');
  variableAdd(variables, 'global');
  // return object into results array
  log.push(retObj);
  return;
}

function errorLineFind(text, finalLog) {
  let finalLine = 0;
  if (finalLog.length) {
    finalLine = finalLog[finalLog.length - 1].line;
  }
  const errInfo = {};
  let completed = false;
  text.log.forEach(line => {
    if (completed) return;
    if (line.indexOf('mintyLog') !== -1) {
      const currLine = parseInt(line.slice(9), 10);
      if (currLine > finalLine) {
        errInfo.line = currLine;
        errInfo.scope = line.split(',')[1];
        completed = true;
      }
    }
  });
  return errInfo;
}

//getting the output of data that will be used in displaying the front end
/*
  making folder called minty
  making folder called file inside minty folder
  reading front end code
    the data that was data is now passed to callback function
  then we write file called mintyVis.js which includes the output data and the front end code
    the mintyVis file is put inside the minty and file folders

*/
// function finalizeRun(output) {
//   console.log('apappaap', appRoot + 'minty')
//   fs.mkdir(appRoot + '/minty', (err) => {
//     if (err) throw err;
//     fs.mkdir(appRoot + '/minty/file', (err2) => {
//       if (err2) throw err2;
//       fs.readFile(path.join(__dirname, '/node_modules/minty/lib/mintyTemplates/mintyVisTemplate.js'), (err3, template) => {
//         if (err3) throw err3;
//         console.log('TEMPEPLATE', template.toString());
//         fs.writeFile(appRoot + '/minty/file/mintyVis.js', `var data = ${output} \n ${template}`, (err4) => {
//           if (err4) throw err4;
//           console.log('create read stream', fs.createReadStream(appRoot + '/node_modules/minty/lib/mintyTemplates/index.html'));
//           fs.createReadStream(appRoot + '/node_modules/minty/lib/mintyTemplates/index.html')
//             .pipe(fs.createWriteStream(appRoot + '/minty/file/minty.html'));
//         });
//       });
//     });
//   });
// }


// function finalizeRun(output) {
//   // console.log('OUTPUT', output);
//   fs.mkdir(appRoot + '/minty', (err) => {
//     // if (err) throw err;
//     fs.mkdir(appRoot + '/minty/file', (err2) => {
//       // if (err2) throw err2;
//       fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/mintyVisTemplate.js', (err3, template) => {
//         // if (err3) throw err3;
//         // console.log('TEMPEPLATE', template.toString());
//         // fs.writeFile(appRoot + '/minty/file/mintyVis.js', `var data = ${output} \n ${template}`, (err4) => {
//           // if (err4) throw err4;
//
//           fs.readFile(appRoot + '/node_modules/jquery/dist/jquery.min.js', 'utf8', 'utf8', (err5, jquery) => {
//             // if (err5) throw err5;
//             console.log(jquery);
//             replace({regex: '<script src="https://code.jquery.com/jquery-2.2.1.min.js" type="text/javascript">',
//                     replacement: '<script>' + jquery,
//                     paths: ['./node_modules/minty/lib/mintyTemplates/index.html'],
//                     recursive: true,
//                     silent: true,
//                   });
//             fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/index.html', 'utf8', (err6, html) => {
//               // if (err6) throw err6;
//               fs.readFile(appRoot + '/Skeleton-2.0.4/css/normalize.css', (err7, normalizecss) => {
//                 // if (err7) throw err7;
//                 fs.readFile(appRoot + '/Skeleton-2.0.4/css/skeleton.css', (err8, skeleton) => {
//                   // if (err8) throw e/rr8;
//                   // console.log('HTMLHTML', html.toString());
//                   const jqueryScript = '<script src="https://code.jquery.com/jquery-2.2.1.min.js" type="text/javascript">';
//                   const frontEndScript = '<script src="./mintyVisTemplate.js"></script>';
//                   const normalizeCss = '<link rel="stylesheet" type="text/css" href="./../../Skeleton-2.0.4/css/normalize.css">';
//                   const skeletonCss = '<link rel="stylesheet" type="text/css" href="./../../Skeleton-2.0.4/css/skeleton.css">';
//
//
//                   //.replace('<script src="https://code.jquery.com/jquery-2.2.1.min.js" type="text/javascript"></script>', `<script type="text/javascript"> \n ${jquery} \n <script>` )
//                   const inserted = html.replace(frontEndScript, `<script type="text/javascript"> \n var data = ${output} \n ${template} \n </script>`).replace(normalizeCss, `<style> \n ${normalizecss} \n </style>`).replace(skeletonCss, `<style> \n ${skeleton} \n </style>`);
//                   console.log('INSERTING"', inserted);
//
//                   fs.writeFile(appRoot + '/minty/file/minty.html', inserted, (err9) => {
//                     // if (err9) throw err9;
//                   });
//                   // fs.createReadStream(inserted)
//                   //   .pipe(fs.createWriteStream(appRoot + '/minty/file/minty.html'));
//
//                 });
//               });
//             });
//           });
//         // });
//       });
//     });
//   });
// }

function finalizeRun(output) {
  fs.mkdir(appRoot + '/minty', (err) => {
    // if (err) throw err;
    fs.mkdir(appRoot + '/minty/file', (err2) => {
      // if (err2) throw err2;
      fs.readFile(appRoot + '/node_modules/jquery/dist/jquery.min.js', 'utf8', (err3, jquery) => {
        if (err3) throw err3;
        fs.readFile(appRoot + '/Skeleton-2.0.4/css/normalize.css', (err4, normalizeCss) => {
          if (err4) throw err4;
          fs.readFile(appRoot + '/Skeleton-2.0.4/css/skeleton.css', (err5, skeletonCss) => {
            if (err5) throw err5;
            fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/mintyVisTemplate.js', (err6, template) => {
              if (err6) throw err6;
              fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/beginning.html', 'utf8', (err7, beginningHtml) => {
                if (err7) throw err7;
                fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/end.html', (err8, endHtml) => {
                  if (err8) throw err8;
                  fs.readFile(appRoot + '/node_modules/minty/lib/mintyTemplates/body.html', (err10, bodyHtml) => {

                      const insert = `${beginningHtml} \n <script type="text/javascript"> \n ${jquery} \n </script> \n <style> \n ${normalizeCss} \n </style> \n <style> \n ${skeletonCss} \n </style> \n ${bodyHtml} \n <script type="text/javascript"> \n var data = ${output} \n ${template} \n </script> \n ${endHtml}`;

                    fs.writeFile(appRoot + '/minty/file/minty.html', insert, (err11) => {
                      if (err11) throw err11;
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

/*the text is the users file + injected code
absPath is the absPath the file the user gave us
*/
function runFile(text, absPath) {
  // console.log(text.log.join('\n'));
  filename = absPath.slice(absPath.lastIndexOf('/') + 1);

  try {
    _eval(text.log.join('\n'), filename, {
      mintyLog: mintyLog,
    }, true);
  } catch (err) {
    const errInfo = errorLineFind(text, log);
    // console.log(errLine)
    const errVars = log.length ? log[log.length - 2].variables : text.globalVars;
    log.push({
      file: filename,
      line: errInfo.line,
      scope: errInfo.scope,
      error: err.message,
      variables: errVars,
    });
  } finally {
    const output = JSON.stringify({
      entry: filename,
      file: text.log.join('\n'),
      log: log,
    }, (key, value) => {
      if (value === undefined) return '_mintyUndefined';
      if (value === Function) return value.toString();
      return value;
    });
    finalizeRun(output);
    console.log(`Minty has finished analyzing ${filename}`);
  }
}

function wrap(text) {
  console.log(text.log.join('\n'));
  filename = text.log[1]
    .split(',')[1]
    .trim();
  console.log(filename);
}




const run = {
  runFile: runFile,
  wrap: wrap,
};

module.exports = run;
