/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. USE FOR LOOP */

/**
 * This function takes a number as an argument. 
 * Adds up all the numbers from 1 to the number passed to the function.
 * @param {number} num
 *
 * @returns {number} sum of all numbers from 1 to num
 */
module.exports = (num) => {
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//     sum += i;
// }
// return sum;
    let arr = [];

    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }

    const sum = arr.reduce((total, currentSum,) => {
    return total + currentSum;
    }, 0)

    return sum;
};
