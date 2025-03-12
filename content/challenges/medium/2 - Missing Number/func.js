// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.

/**
 * Returns the missing number from an array of numbers between 1 and 10
 * @param {Array} arr
 *
 * @returns {Number} the missing number
 */
module.exports = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10 && arr[i] >= 1) {
      sum += arr[i];
    }
  }

  let missingNum = 55 - sum;
  
  return missingNum;
}