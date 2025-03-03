// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// Should be case-insensitive.

/**
 * Check a word for double letters (case-insensitive)
 * @param {string} word
 *
 * @returns {boolean}
 */
module.exports = (word) => {
    for (let i = 0; i < word.length - 1; i++) {
            if (word[i].toLowerCase() === word[i + 1].toLowerCase()) {
                return true;
            }
        }
        return false;
    };