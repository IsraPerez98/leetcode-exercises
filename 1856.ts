/**
 * Finds the maximum sum of the minimum product of any subarray of the given array.
 * 
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} The maximum sum of the minimum product of any subarray.
 */
function maxSumMinProduct(nums: number[]): number {
    let result = BigInt(0);

    // Monotonic stack to keep track of indices and values
    let monoStack: number[][] = [];

    // Prefix sums array
    const prefixSums = [0];

    // Calculate prefix sums
    for(const n of nums) {
        prefixSums.push(prefixSums[prefixSums.length - 1] + n);
    }

    // Iterate through the array
    for(let i = 0; i < nums.length ; i++) {
        let currentStartIndex = i;
        const currentValue = nums[i];

        // Maintain the monotonic stack
        while(monoStack.length && monoStack[monoStack.length - 1][1] > currentValue) {
            const [ startIndex, value ] = monoStack.pop()!;

            const sum = BigInt(prefixSums[i] - prefixSums[startIndex]);

            const newResult = BigInt(sum * BigInt(value));
            
            if(newResult > result) result = newResult;

            currentStartIndex = startIndex;
        }

        monoStack.push([currentStartIndex, currentValue]);
    }

    // Process remaining elements in the stack
    for(const [ startIndex, value ] of monoStack) {
        const sum = BigInt(prefixSums[nums.length] - prefixSums[startIndex]);

        const newResult = BigInt(sum * BigInt(value));

        if(newResult > result) result = newResult;
    }

    return Number(result % BigInt(10**9 + 7));
};

console.log(maxSumMinProduct([1,2,3,2]))
console.log(maxSumMinProduct([2,3,3,1,2]))
console.log(maxSumMinProduct([3,1,5,6,4,2]))