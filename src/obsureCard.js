/**
 * Obscures a credit card number, leaving only the last 4 digits visible.
 * If the input is not between 12 and 16 characters, returns "Invalid Credit Card".
 *
 * @param {string} cardNumber - The credit card number to obscure.
 * @returns {string} - The obscured credit card or "Invalid Credit Card".
 */
function obscureCard(cardNumber) {
    if (cardNumber.length < 12 || cardNumber.length > 16) {
      return 'Invalid Credit Card';
    }
    return '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4);
  }
  
  module.exports = obscureCard;
  