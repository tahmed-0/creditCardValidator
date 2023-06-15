const validateCreditCardNumber = require('..app.js');

test('Valid credit card number should return true', () => {
  expect(validateCreditCardNumber('45320151128336')).toBe(true);
});

test('Invalid credit card number should return false', () => {
  expect(validateCreditCardNumber('1234567890123456')).toBe(false);
});

test('Empty credit card number should return false', () => {
  expect(validateCreditCardNumber('')).toBe(false);
});
