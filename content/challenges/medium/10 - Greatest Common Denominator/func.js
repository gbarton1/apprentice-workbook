// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.

/**
 * Returns the greatest common divisor (GCD) of two integers.
 * @param {number} int1 
 * @param {number} int2 
 *
 * @returns {number} GCD
 */
module.exports = (int1, int2) => {
   let  comDivNum = int1 + int2;
   while ((int1 % comDivNum !== 0) || (int2 % comDivNum !== 0)){
    comDivNum--;
   }
    return comDivNum;
}
