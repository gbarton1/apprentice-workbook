// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.

/**
 * Converts the first character of each word to uppercase.
 * @param {string} str 
 *
 * @returns {string}
 */
module.exports = (str) => {
    // let newString = '';

    // for (let i = 0; i < str.length; i++) {
    //     if (i === 0) {
    //         newString += str[i].toUpperCase();
    //     } else if (str[i - 1] === ' ') {
    //         newString += str[i].toUpperCase();
    //     } else {
    //         newString += str[i];
    //     }
    // }

    // return newString;
    let splitString = str.split(' ');
    let capitalizedWords = [];

    for (let i = 0; i < splitString.length; i++) {
        let word = splitString[i];
        if (word.length > 0) {
            capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
        } else {
            capitalizedWords.push(word);
        }
    }
    return capitalizedWords.join(' ');
}
// this way feels longer...is there a simpler way without using a for loop maybe?