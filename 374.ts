/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * Recursively searches for the number picked by the guess API using binary search.
 * @param {number} current - The current number being guessed.
 * @param {number} max - The maximum number that can be guessed.
 * @returns {number} The number picked by the guess API.
 */
function binarySearchNumber(current: number, max: number): number {
    const result = guess(current);

    if(result === 0) { // your guess is equal to the number I picked
        return current;
    }

    if(result === -1) { // Your guess is higher than the number I picked
        return binarySearchNumber(Math.round(current/2), current);
    }

    if(result === 1) { // Your guess is lower than the number I picked
        const midPoint = Math.round((current + max) / 2);
        return binarySearchNumber(midPoint, max);
    }

    // Unreachable code
    return 0;
}

/**
 * Finds the number picked by the guess API using binary search.
 * @param {number} n - The maximum number that can be guessed.
 * @returns {number} The number picked by the guess API.
 */
function guessNumber(n: number): number {
    const firstNumber = Math.floor(n/2);

    return binarySearchNumber(firstNumber, n);
};
