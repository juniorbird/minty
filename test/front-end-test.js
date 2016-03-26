//1. are buttons appended
//2. is codemirror appended
//3. do tds start as undefined
//4. how to test if last button and first does what its supposed to
//5. need dummmy data
//6. test if file loads

const Browser = require('zombie');
const expect = require('expect');
const mockData = require('./dummyfiles/front-end-dummy');
var counter = 0;


describe('Minty Tests', () => {
  const browser = new Browser();

  // beforeEach(done => {
  //   browser.reload(done);
  // });

  before(done => {
    browser.visit(`file://${__dirname.slice(0, -4)}minty/file/minty.html`, done);
  });

  it('has a button called first', () => {
    browser.assert.element('button#first');
  });

  it('has a button called last', () => {
    browser.assert.element('button#last');
  });

  it('has a button called forward', () => {
    browser.assert.element('button#forward');
  });

  it('has a button called back', () => {
    browser.assert.element('button#back');
  });

  it('has ace editor', () => {
    browser.assert.element('.ace_editor');
  });

  it ('press forward appends right data to table', () => {

    return browser.fire('#forward', 'click')
      .then(() => {
        counter++;
        browser.fire('#forward', 'click');
      })
      .then(() => {
        counter++;
        browser.fire('#forward', 'click');
      })
      .then(() => {
        counter++;
        const variables = browser.queryAll('.variables');
        const word = parseInt(variables[1].textContent);
        const varNames = Object.keys(mockData.log[counter].variables);
        const mockVar = mockData.log[counter].variables[varNames[1]];
        expect(word).toEqual(mockVar);
      });
  });

  it ('press ')





});
