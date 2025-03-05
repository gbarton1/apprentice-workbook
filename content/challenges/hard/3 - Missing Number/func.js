// Create a function that takes an array of numbers between 1 and n (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.

/**
 * Returns the missing number from an array of numbers between 1 and some number n minus one missing number
 * @param {Array} arr
 *
 * @returns {Number} the missing number
 */
module.exports = (arr) => {
   // take all numbers of the array and sum
   let missingNum = 0;
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
// then find the expectedSum using the formula for missing numbers
    let n = arr.length +1;
    let expectedSum = (n * (n + 1) / 2);
    missingNum = expectedSum - sum; // subtract sum from expected sum this equals missing number
   return missingNum;
}