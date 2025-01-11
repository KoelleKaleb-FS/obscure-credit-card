const obscureCard = require('../src/obsureCard');

describe('obscureCard', () => {
  test('should obscure a 12-digit credit card', () => {
    expect(obscureCard('123456789012')).toBe('********9012');
  });

  test('should obscure a 16-digit credit card', () => {
    expect(obscureCard('1234567812345678')).toBe('************5678');
  });

  test('should return "Invalid Credit Card" for strings shorter than 12 digits', () => {
    expect(obscureCard('12345678901')).toBe('Invalid Credit Card');
  });

  test('should return "Invalid Credit Card" for strings longer than 16 digits', () => {
    expect(obscureCard('12345678901234567')).toBe('Invalid Credit Card');
  });

  test('should return "Invalid Credit Card" for an empty string', () => {
    expect(obscureCard('')).toBe('Invalid Credit Card');
  });

  test('should obscure a 13-digit credit card', () => {
    expect(obscureCard('1234567890123')).toBe('*********0123');
  });

  test('should obscure a 15-digit credit card', () => {
    expect(obscureCard('123456789012345')).toBe('***********2345');
  });
});
