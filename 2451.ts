/**
 * Returns the position of a letter in the alphabet, starting from 0 for "a".
 * @param {string} letter - The letter to get the position for.
 * @returns {number} The position of the letter in the alphabet.
 */
function getAlphabetPosition(letter: string): number {
    return letter.charCodeAt(0) - 97; // 97 = "a"
}

/**
 * Returns an array of the differences between adjacent letters in a word.
 * @param {string} word - The word to get the difference array for.
 * @returns {number[]} An array of the differences between adjacent letters in the word.
 */
function getDifferenceArray(word: string): number[] {
    const positions: number[] = new Array(word.length);
    const difference: number[] = new Array(word.length-1);

    positions[0] = getAlphabetPosition(word[0]);

    for(let i=1;i<word.length;i++) {
        const position = getAlphabetPosition(word[i]);
        positions[i] = position;

        difference[i-1] = position - positions[i-1];
    }

    return difference;
}

/**
 * Returns true if the given word has the same difference array as the given difference array, false otherwise.
 * @param {string} word - The word to check.
 * @param {number[]} differenceArray - The difference array to compare against.
 * @returns {boolean} True if the word has the same difference array as the given difference array, false otherwise.
 */
function hasEqualDifferenceArray(word: string, differenceArray: number[]): boolean {

    const positions: number[] = new Array(word.length);

    positions[0] = getAlphabetPosition(word[0]);

    for(let i=1;i<word.length;i++) {
        const position = getAlphabetPosition(word[i]);
        positions[i] = position;

        const difference = position - positions[i-1];
        if(difference !== differenceArray[i-1]) {
            return false;
        }
    }

    return true;
}

/**
 * Returns true if the two given arrays are equal, false otherwise.
 * @param {number[]} array - The first array to compare.
 * @param {number[]} array2 - The second array to compare.
 * @returns {boolean} True if the two arrays are equal, false otherwise.
 */
function areEqualArrays(array: number[], array2: number[]) {
    for(let i=0;i<array.length;i++) {
        if(array[i] !== array2[i]) return false;
    }

    return true;
}

/**
 * Returns the odd string in the given array of strings.
 * @param {string[]} words - The array of strings to check.
 * @returns {string} The odd string in the array.
 */
function oddString(words: string[]): string {
    const firstDifferenceArray = getDifferenceArray(words[0]);

    const secondDifferenceArray = getDifferenceArray(words[1]);

    //console.log({firstDifferenceArray});

    if( !areEqualArrays(firstDifferenceArray, secondDifferenceArray)) { // the odd array is in words[0] or words[1], we need to compare with words[2] to check
        const thirdDifferenceArray = getDifferenceArray(words[2]);

        if(!areEqualArrays(firstDifferenceArray, thirdDifferenceArray)) { // the first one is the odd one
            return words[0];
        } else { // the second one is the odd one
            return words[1];
        }
    }

    // we keep checking from words[2] to words[lenght-1] until we find a different one
    for(let i=2;i<words.length;i++) {
        //console.log(words[i],getDifferenceArray(words[i]));
        if(!(hasEqualDifferenceArray(words[i], firstDifferenceArray))) {
            return words[i];
        }
    }

    return "";

};
