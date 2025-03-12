// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.

/**
 * Reverse the words in a string that are five or more characters long
 * @param {string} str 
 *
 * @returns {string} The string with the proper words reversed
 */
module.exports = (str) => {
    let result = '';
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currentWord += str[i];
        } else {
            if (currentWord.length >= 5) {
                let flippedWord = '';
                for (let k = currentWord.length - 1; k >= 0; k--) {
                    flippedWord += currentWord[k];
                }
                result += flippedWord + ' ';
            } else {
                result += currentWord + ' ';
            }

            currentWord = '';
        }
    }

    if (currentWord.length >= 5) {
        let flippedWord = '';
        for (let k = currentWord.length - 1; k >= 0; k--) {
            flippedWord += currentWord[k];
        }
        result += flippedWord;
    } else {
        result += currentWord;
    }

    return result;
}