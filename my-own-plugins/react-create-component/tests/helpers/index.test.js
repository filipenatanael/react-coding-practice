const {
  capitalize,
  titleize
} = require('../../helpers/index.js');

test('uppercase first letter.', () => {
  let receivedvalue = capitalize('title');
  let expectedvalue = 'Title';
  expect(receivedvalue).toBe(expectedvalue);
});

test('lowercase first letters.', () => {
  let text = "Hello world!";
  expect(titleize(text)).toBe('Hello World!');
});
