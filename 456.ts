/**
 * Returns true if the given array of numbers contains a 132 pattern, false otherwise.
 * @param {number[]} nums - The array of numbers to check.
 * @returns {boolean} True if the array contains a 132 pattern, false otherwise.
 */
function find132pattern(nums: number[]): boolean {
    const threeStack: number[] = []; // stack to keep track of previous values

    let twoCandidate = Number.NEGATIVE_INFINITY; // initialize the two candidate to the smallest possible value

    for(let i=nums.length-1;i>=0;i--) {
        const firstCandidate = nums[i]; // set the first number candidate to the current value

        if(firstCandidate < twoCandidate) { // if we find a 132 pattern, log the values and return true
            return true
        };

        while(threeStack.length !== 0 && threeStack[threeStack.length -1] < firstCandidate) {
            twoCandidate = threeStack.pop()!; // pop values from the stack until we find a value greater than the first candidate
        }

        threeStack.push(firstCandidate); // push the first candidate onto the three stack
    }

    return false; // no 132 pattern found
};
