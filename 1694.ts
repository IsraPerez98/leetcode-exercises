/**
 * Reformats a phone number string by removing spaces and dashes, and then grouping the digits into blocks of 3 or 2.
 * 
 * @param {string} number - The input phone number string.
 * @returns {string} The reformatted phone number string.
 */
function reformatNumber(number: string): string {
    let result = '';
    let currentBlock = '';

    // Iterate through each character in the input string
    for (let i = 0; i < number.length; i++) {
        // Skip spaces and dashes
        if (number[i] === ' ' || number[i] === '-') continue;

        currentBlock += number[i];

        // If the current block has 3 digits, add it to the result
        if (currentBlock.length === 3) {
            result.length === 0 ? result = currentBlock : result += '-' + currentBlock; 
            currentBlock = '';
        }
    }

    // Handle the case where the last block has only 1 digit
    if (currentBlock.length === 1) {
        currentBlock = result[result.length-1] + currentBlock;

        result = result.substring(0, result.length - 1);
    }

    // Add the remaining block to the result
    if (currentBlock.length !== 0) {
        result.length === 0 ? result = currentBlock : result += '-' + currentBlock; 
    }

    return result;
}