// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.

/**
 * Perform an even-odd transformation to an array, n times.
 * even substracts 2, odd adds 2 n times to each element in the array.
 * @param {Array} arr 
 * @param {number} n 
 */
module.exports = (arr, n) => {
    // let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] % 2 === 0 ) {
    //             newArr.push((arr[i] - (2 * n)));
    //         } else if (arr[i] % 2 !== 0) {
    //             newArr.push((arr[i] + (2 * n)));
    //         }
    //     }

    // return newArr;
    // using push method so I changed it below
    let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 ) {
                newArr[newArr.length] = (arr[i] - (2 * n));
            } else if (arr[i] % 2 !== 0) {
                newArr[newArr.length] = (arr[i] + (2 * n));
            }
        }

    return newArr;
}