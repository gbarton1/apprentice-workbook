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
    }

    let len = str.length

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}