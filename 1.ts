/**
 * Returns an array of two indices that add up to the target value.
 * @param {number[]} nums - The array of numbers to search through.
 * @param {number} target - The target value to find the sum of.
 * @returns {number[]} An array of two indices that add up to the target value.
 */
function twoSum(nums: number[], target: number): number[] {

    const reviewed = new Map();

    for(let i=0;i<nums.length;i++) {
        const num = nums[i];

        const complement = target - num;

        const element = reviewed[complement];

        if(element !== undefined) {
            return [i,element];
        }

        reviewed[num] = i;
    }

    return [];
};
