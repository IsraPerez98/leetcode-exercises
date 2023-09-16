/**
 * Returns the minimum number of steps required to make the characters in string s equal to the characters in string t.
 * A step consists of replacing one character with another character.
 * @param {string} s - The source string.
 * @param {string} t - The target string.
 * @returns {number} The minimum number of steps required to make the characters in string s equal to the characters in string t.
 */
function minSteps(s: string, t: string): number {
    const letters = new Map();

    // Count the number of occurrences of each character in string s.
    for(let i = 0; i < s.length; i++) {
        const currentLetter = s[i];

        const prevSize = letters.get(currentLetter);
        if(prevSize === undefined) {
            letters.set(currentLetter, 1);
            continue;
        }

        letters.set(currentLetter, prevSize+1);
    }

    // Subtract the number of occurrences of each character in string t from the corresponding count in string s.
    for(let i = 0; i < t.length; i++) {
        const currentLetter = t[i];

        const prevSize = letters.get(currentLetter);
        if(prevSize === undefined) {
            continue;
        }

        if(prevSize === 1) {
            letters.delete(currentLetter);
            continue;
        }

        letters.set(currentLetter, prevSize-1);

    }

    // Sum up the remaining counts in the map to get the minimum number of steps required.
    return Array.from(letters.values()).reduce((acc, val) => acc + val, 0)
}
