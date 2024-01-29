const { capitalize } = require('../src/formatter');

test('capitalize capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
