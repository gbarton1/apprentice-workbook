// Create a function that takes in an initial word and 
// filters out an array to contain words that start with 
// the same letters as the initial word.

// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

/**
 * Find words that start with the same letters as the initial word
 * @param {string} initial
 *
 * @param {Array} words 
 */
module.exports = (initial, words) => {
    let filteredArr = [];

    for (let i = 0; i < words.length; i++) {
        let match = true;

    for (let k = 0; k < initial.length; k++) {
        if (k >= words[i].length || initial[k] !== words[i][k]) {
           match = false;
           break;
            }
        }
        if (match) {
        filteredArr[filteredArr.length] = words[i];
         }
    }
    return filteredArr;
}