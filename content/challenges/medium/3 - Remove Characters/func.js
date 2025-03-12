// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

/**
 * this function removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and returns the new string.
 * @param {string} str
 *
 * @returns {string}
 */
module.exports = (str) => {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (/\w|[\s._-]/.test(str[i])) {
            newStr += str[i];
        }
    }

    return newStr;
}
