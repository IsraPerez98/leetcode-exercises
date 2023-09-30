/**
 * A class representing a solution for shuffling an array of numbers.
 */
class Solution {

    /**
     * The original array of numbers.
     * @type {number[]}
     */
    originalArray: number[];

    /**
     * Creates a new Solution instance with the given array of numbers.
     * @param {number[]} nums - The array of numbers to shuffle.
     */
    constructor(nums: number[]) {
        this.originalArray = nums;
    }

    /**
     * Resets the array to its original state.
     * @returns {number[]} The original array of numbers.
     */
    reset(): number[] {
        return this.originalArray;
    }

    /**
     * Shuffles the array randomly.
     * @returns {number[]} The shuffled array of numbers.
     */
    shuffle(): number[] {
        const shuffledArray: number[] = [...this.originalArray];

        const arrayLength = shuffledArray.length

        for(let i=0;i<arrayLength;i++) {
            const shuffledPosition = Math.floor(Math.random() * arrayLength );

            if(shuffledPosition === i) continue;

            const savedValue = shuffledArray[i];

            shuffledArray[i] = shuffledArray[shuffledPosition];

            shuffledArray[shuffledPosition] = savedValue;
        }

        return shuffledArray;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
