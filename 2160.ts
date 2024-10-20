/**
 * Calculates the minimum possible sum of two new numbers formed by rearranging the digits of the given number.
 * 
 * @param {number} num - The input number.
 * @returns {number} The minimum possible sum of the two new numbers.
 */
function minimumSum(num: number): number {
    // By sorting the number we can get the least significant digits
    // In order to set them in the decimals place
    const numArr = num.toString().split('').map((val: string) => Number(val)).sort((a: number, b: number) => {
        return a - b;
    });

    //const newA = numArr[0] * 10 + numArr[3];
    //const newB = numArr[1] * 10 + numArr[2];

    return (numArr[0] * 10 + numArr[3]) + (numArr[1] * 10 + numArr[2]);
};