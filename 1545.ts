/**
 * Reverses and inverts a binary string.
 * 
 * @param {string} s - The binary string to reverse and invert.
 * @returns {string} The reversed and inverted binary string.
 */
function reverseInvertString(s: string) {
    let result = "";
    for(let i = s.length - 1; i >= 0; i-- ) {
        result += s[i] === "0" ? "1" : "0"
    }

    return result;
}

/**
 * Determines the binary string for a given n.
 * 
 * @param {number} n - The level of the binary string to determine.
 * @returns {string} The binary string for the given n.
 */
function determineBinaryString(n: number) {
    if(n === 1) return "0";

    const previous = determineBinaryString(n-1);

    return previous + "1" + reverseInvertString(previous);
}

/**
 * Finds the k-th bit in the binary string for a given n.
 * 
 * @param {number} n - The level of the binary string.
 * @param {number} k - The position of the bit to find.
 * @returns {string} The k-th bit in the binary string.
 */
function findKthBit(n: number, k: number): string {
    return determineBinaryString(n)[k-1];
};