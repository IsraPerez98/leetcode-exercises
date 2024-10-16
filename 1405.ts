/**
 * A map of indices to letters.
 */
const letterMap = {
    0: "a",
    1: "b",
    2: "c",
}

/**
 * Determines the next letter index to add to the result string based on the remaining counts
 * and the previous two characters in the result string.
 * will return -1 if no letter is available
 * 
 * @param {number[]} numbers - An array containing the counts of 'a', 'b', and 'c'.
 * @param {string} prevStrings - The last two characters of the result string.
 * @returns {number} The index of the next letter to add, or -1 if no valid letter can be added.
 */
function determineNextLetterIndex(numbers: number[], prevStrings: string): number {
    let maxIndex = -1;

    for (let i = 0; i < numbers.length; i++) {

        if(i === 0 && prevStrings === 'aa') continue;

        if(i === 1 && prevStrings === 'bb') continue;

        if(i === 2 && prevStrings === 'cc') continue;

        const remaining = numbers[i];

        if(remaining === 0) continue;

        if (maxIndex === -1 || remaining > numbers[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

/**
 * Generates the longest diverse string possible with the given counts of 'a', 'b', and 'c'.
 * A diverse string is defined as a string where no three consecutive characters are the same.
 * 
 * @param {number} a - The count of 'a'.
 * @param {number} b - The count of 'b'.
 * @param {number} c - The count of 'c'.
 * @returns {string} The longest diverse string possible.
 */
function longestDiverseString(a: number, b: number, c: number): string {

    let result = "";

    const numbers = [a, b, c];

    let prevStrings = '';
    
    while(true) {
        const nextIndex = determineNextLetterIndex(numbers, prevStrings);

        if(nextIndex === -1) {
            break;
        }

        const letterValue = letterMap[nextIndex];

        numbers[nextIndex]--;

        result += letterValue;

        if(result.length > 1) {
            prevStrings = result.substring(result.length - 2);
        }
    }

    return result;
};