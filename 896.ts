/**
 * Returns true if the given array of numbers is monotonic, false otherwise.
 * @param {number[]} nums - The array of numbers to check.
 * @returns {boolean} True if the array is monotonic, false otherwise.
 */
function isMonotonic(nums: number[]): boolean {
    let ascending: boolean;
    let i;

    // check if the array is ascending or descending
    for(i=1;i<nums.length;i++) {
        const current = nums[i];
        const previous = nums[i-1];

        if(current < previous) {
            ascending = false;
            break;
        } else if(current > previous) {
            ascending = true;
            break;
        }
    }

    // check if the array is monotonic
    if(ascending!) { // this should always be defined so we use a !
        for(i;i<nums.length;i++) {
            const current = nums[i];
            const previous = nums[i-1];

            if(current < previous) {
                return false;
            }
        }
    } else {
        for(i;i<nums.length;i++) {
            const current = nums[i];
            const previous = nums[i-1];

            if(current > previous) {
                return false;
            }
        }
    }

    return true;
};
