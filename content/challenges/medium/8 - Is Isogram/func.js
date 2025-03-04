// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.

/**
 * check if a string is an isogram
 * @param {string} str 
 *
 * @returns {boolean}
 */
module.exports = (str) => {
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    return false;
                }
            }
        }
        return true;
}