/**
 * Recursively finds the maximum number of unique substrings that can be obtained by splitting the given string.
 * 
 * @param {string} s - The input string.
 * @param {number} start - The starting index for the current split.
 * @param {Set<string>} usedStrings - A set of substrings that have already been used.
 * @returns {number} The maximum number of unique substrings.
 */
function backtrackSplit(s: string, start: number, usedStrings: Set<string>) {
    if(start === s.length){
        return 0;
    }

    let splits = 0;

    let currentWord = "";
    for(let i=start;i<s.length;i++) {
        currentWord += s[i];

        if(usedStrings.has(currentWord)) continue;

        usedStrings.add(currentWord);

        splits = Math.max(splits, 1 + backtrackSplit(s, i + 1, usedStrings));

        usedStrings.delete(currentWord);
    }

    return splits;
}

/**
 * Finds the maximum number of unique substrings that can be obtained by splitting the given string.
 * 
 * @param {string} s - The input string.
 * @returns {number} The maximum number of unique substrings.
 */
function maxUniqueSplit(s: string): number {
    const usedStrings = new Set<string>();

    return backtrackSplit(s, 0, usedStrings);
};