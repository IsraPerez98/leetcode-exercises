/**
 * Calculates the sum of beauties of an array. A beauty is defined as:
 * - 2 if the element is greater than the maximum element to its left and less than the minimum element to its right
 * - 1 if the element is greater than the previous element and less than the next element.
 * 
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} The sum of beauties of the array.
 */
function sumOfBeauties(nums: number[]): number {
    // Keep the max number to the left of the current i
    let maxLeft = nums[0];

    // We keep an array of the min value from the current i, to the end of the array
    const minRight: number[] = [nums[nums.length-1]];
    for(let i = nums.length-2; i>=0 ; i--) {

        // We use push instead of unshift because it's way faster
        // By doing this we need to access the array backwards
        minRight.push(Math.min(nums[i], minRight[minRight.length-1]));
    }

    let result = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        const numI = nums[i];

        let biggerThanLeft = false;

        if(numI > maxLeft) {
            maxLeft = numI;
            biggerThanLeft = true;
        }

        // Main ordered condition j < i < k
        if (nums[i + 1] <= numI || nums[i - 1] >= numI) continue;

        // If number is maximum towards left
        if(biggerThanLeft) {

            // We replace current max
            maxLeft = numI;

            // If num is also min towards right
            if(numI < minRight[ minRight.length - i - 2]) {  

                // Condition 2
                result += 2;
                continue;
            }
        }

        // If anything above fails, we have condition 1
        result++;
    }

    return result;
}