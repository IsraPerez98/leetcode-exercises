/**
 * Finds the longest distance between two consecutive 1's in the binary representation of a number.
 * 
 * @param {number} n - The input number.
 * @returns {number} The longest distance between two consecutive 1's in the binary representation of the number.
 */
function binaryGap(n: number): number {
    const nBin = n.toString(2);

    let longestDistance = 0;

    let leftIndex = nBin.indexOf('1');

    let currentCount = 1;

    for(let i=leftIndex+1;i<nBin.length;i++) {
        if(nBin[i] === '0') {
            currentCount++;
            continue;
        }

        //nBin === 1
        if(currentCount > longestDistance) {
            longestDistance = currentCount;
        }

        leftIndex = i;
        currentCount = 1;
    }

    return longestDistance;
};

console.log(binaryGap(5))