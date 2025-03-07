// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.

/**
 * Returns the nth Fibonacci number
 * @param {number} n 
 *
 * @returns {number} nth Fibonacci number
 */
module.exports = (n) => {
    let prevNum1 = 1
    let prevNum2 = 1;
    let current = 0;
    if (n <= 1){
        return n;
    } if (n == 2) {
        return 1;
    } for (let i = 3; i <= n; i++) {
        current = prevNum1 + prevNum2;
        prevNum1 = prevNum2;
        prevNum2 = current;
    }
    return current;
}