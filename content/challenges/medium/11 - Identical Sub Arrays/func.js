// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.

/**
 * Returns the number of sub-arrays with identical elements
 * @param {Array.<Array.<number>>} arr two dimensional array
 *
 * @returns {number} number of sub-arrays with identical elements
 */
module.exports = (arr) => {
    let numSameArr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            numSameArr += 1;
            continue;
        }
        let firstElement = arr[i][0];
        let allSame = true;

        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] !== firstElement) {
                allSame = false;
                }
            }
        if (allSame) {
        numSameArr += 1;
        }
    }
    return numSameArr;
}