/**
 * Finds the longest palindromic substring in the given string.
 * 
 * @param {string} s - The input string.
 * @returns {string} The longest palindromic substring.
 */
function longestPalindrome(s: string): string {
    if(s.length === 1) return s[0];

    let maxPalindrome = s[0];

    // Check for odd-length palindromes
    for(let i=1; i<s.length-1;i++) {
        let currentPalindrome = s[i];
        
        let leftPointer = i - 1;
        let rightPointer = i + 1;

        // Expand around the center
        while(leftPointer >= 0 && rightPointer < s.length && s[leftPointer] === s[rightPointer]) {
            currentPalindrome = s[leftPointer] + currentPalindrome + s[rightPointer];

            leftPointer--;
            rightPointer++;
        }

        if(currentPalindrome.length > maxPalindrome.length) {
            maxPalindrome = currentPalindrome;
        }
    }

    // Check for even-length palindromes
    for(let i=0; i<s.length-1;i++) {
        if(s[i] !== s[i+1]) continue;

        let currentPalindrome = s[i] + s[i+1];

        let leftPointer = i - 1;
        let rightPointer = i + 2;

        // Expand around the center
        while(leftPointer >= 0 && rightPointer < s.length && s[leftPointer] === s[rightPointer]) {
            currentPalindrome = s[leftPointer] + currentPalindrome + s[rightPointer];

            leftPointer--;
            rightPointer++;
        }

        if(currentPalindrome.length > maxPalindrome.length) {
            maxPalindrome = currentPalindrome;
        }
    }

    return maxPalindrome;
};

const s = "ccc";

console.log(longestPalindrome(s));