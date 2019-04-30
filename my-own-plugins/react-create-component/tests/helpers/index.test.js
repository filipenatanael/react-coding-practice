const { capitalize } = require('../../helpers/index.js');

test('uppercase first lettter.', () => {
  let receivedvalue = capitalize('title');
  let expectedvalue = 'Title';
  expect(receivedvalue).toBe(expectedvalue);
});
