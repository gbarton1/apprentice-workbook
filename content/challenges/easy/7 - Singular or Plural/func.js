// Create a function that takes in a word and returns whether or not it is plural as a boolean. A plural word is one that ends in "s"
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

/**
 * Ignoring es, ies and other edge cases, this function will return true if the word ends in 's'
 * @param {string} word 
 *
 * @returns {boolean}
 */
module.exports = (word) => {
    // if (word.endsWith("s")) {
    //     return true;
    // } else {
    //     return false;
    // } 
    // passed all but need to break it down more
    // if (word[word.length - 1] === "s") {
    //     return true;
    // } else {
    //     return false;
    // }
    return (word[word.length - 1] === 's');
};
