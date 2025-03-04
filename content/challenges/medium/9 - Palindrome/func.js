// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.

/**
 * Check if a string is a palindrome.
 * @param {string} str 
 *
 * @returns {boolean}
 */
module.exports = (str) => {
    if (str.length == 0) {
        return true;
    };
    for (let i = 0; i < str.length; i++) {
        for (let k = str.length - 1; k >= 0; k--) {
            if (str[i] === str[k]) {
                return true;
            } else {
                return false;
            }
        }
    }
}