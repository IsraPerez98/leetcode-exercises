/**
 * Returns an array of n unique integers that sum up to 0.
 * @param {number} n - The number of integers to return.
 * @returns {number[]} An array of n unique integers that sum up to 0.
 */
function sumZero(n: number): number[] {
    let result: number[] = [];

    if(n % 2 !== 0) result.push(0);

    for(let i=1;i<Math.floor(n/2)+1;i++) {
        result.push(i);
        result.push(-i);
    }

    return result;
};
