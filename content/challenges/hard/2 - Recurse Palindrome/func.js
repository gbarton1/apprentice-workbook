// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
// A recursive function is a function that calls itself

/**
 * Determines if a string is a palindrome
 * @param {string} str 
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
module.exports = (str) => {
  const reversePalindrome = (str) => {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length -1]) {
      return false;
    } else {
      let newString = str.slice(1, -1);
      return reversePalindrome(newString);
    }
  }
  return reversePalindrome(str);
}
