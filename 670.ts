/**
 * A map of numbers to their string representations.
 */
const numMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10"
}

/**
 * A map of numbers to their possible higher value compliments.
 */
const complimentMap = {
    "9": [],
    "8": ["9"],
    "7": ["9", "8"],
    "6": ["9", "8", "7"],
    "5": ["9", "8", "7", "6"],
    "4": ["9", "8", "7", "6", "5"],
    "3": ["9", "8", "7", "6", "5", "4"],
    "2": ["9", "8", "7", "6", "5", "4", "3"],
    "1": ["9", "8", "7", "6", "5", "4", "3", "2"],
    "0": ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
}

/**
 * Swaps two digits in the number to get the maximum possible value.
 * 
 * @param {number} num - The input number.
 * @returns {number} The maximum number possible by swapping two digits.
 */
function maximumSwap(num: number): number {
    const numStrArray = num.toString().split('');

    let numbersIndexes = new Map<string, number[]>();

    // Create a map of digit to their indexes in the number string
    for(let i = 0; i < numStrArray.length; i++) {
        const val = numStrArray[i];
        const numberIndexes = numbersIndexes.get(val);

        if(numberIndexes) {
            numberIndexes.unshift(i);
            numbersIndexes.set(val, numberIndexes);
        } else {
            numbersIndexes.set(val, [i]);
        }
    }

    // Iterate through each digit in the number string
    for(let i = 0; i < numStrArray.length; i++) {
        const currentValue = numStrArray[i];
        const compliments = complimentMap[currentValue];

        // Check for possible higher value compliments
        for(const compliment of compliments) {
            const indexes = numbersIndexes.get(compliment);

            if(!indexes) continue;

            let leastSignificantIndex: number = 0;

            // Find the least significant index of the compliment
            for(const index of indexes) {
                if(index > i) {
                    leastSignificantIndex = index;
                    break;
                }
            }

            if(!leastSignificantIndex) continue;

            // Swap the digits
            numStrArray[leastSignificantIndex] = currentValue;
            numStrArray[i] = compliment;

            return Number(numStrArray.join(''));
        }
    }

    return Number(numStrArray.join(''));
};