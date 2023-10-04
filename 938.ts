/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * Recursively generates an array of values in a binary search tree that fall within a given range.
 * @param {TreeNode | null} current - The current node in the binary search tree.
 * @param {number} low - The lower bound of the range.
 * @param {number} high - The upper bound of the range.
 * @param {number[]} sumArray - The array to store the values in.
 */
function generateSumArray(current: TreeNode | null, low: number, high: number, resultArray: number[]) {
    if(current === null) return;

    const value = current.val;

    const higgherThanLow = value >= low;

    const lowerThanhigh = value <= high;

    // if the value is higher than the lower bound
    if(higgherThanLow) {
        // recursively generate the sum array for the left subtree
        generateSumArray(current.left, low, high, resultArray);
    }

    // if the value is within the range
    if(higgherThanLow && lowerThanhigh) {
        // add the value to the sum array
        resultArray[0] = resultArray[0] + value;
    }

    // if the value is lower than the upper bound
    if(lowerThanhigh) {
        // recursively generate the sum array for the right subtree
        generateSumArray(current.right, low, high, resultArray);
    }
}

/**
 * Calculates the sum of all values in a binary search tree that fall within a given range.
 * @param {TreeNode | null} root - The root node of the binary search tree.
 * @param {number} low - The lower bound of the range.
 * @param {number} high - The upper bound of the range.
 * @returns {number} The sum of all values in the binary search tree that fall within the given range.
 */
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    // we create this array only so we can pass the total by reference to the function
    const resultArray: number[] = new Array(1);
    resultArray[0] = 0;

    generateSumArray(root, low, high, resultArray);

    // return the sum of the values in the array[0]
    return resultArray[0];
};
