const expect = require('expect');
const utils = require('../lib/utils.js');
const path = require('path');

describe('Backend', () => {
  it('should find files', () => {
    .expect(utils.read(path.join(__dirname, 'dummyfiles/small.js')))
      .toEqual("var one = 'hello';");
  });
});
