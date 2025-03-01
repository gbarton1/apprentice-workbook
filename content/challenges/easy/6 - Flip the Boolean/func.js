// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given
/**
 * This function will flip a boolean value or return "boolean expected" if another type is given
 * @param {boolean} bool
 *
 * @returns {boolean|string}
 */
 module.exports = (bool) => {
 if (bool === true) {
    return !bool;
 } if (bool === false) {
    return !bool;
 } else {
    return "boolean expected";
 }
 };
