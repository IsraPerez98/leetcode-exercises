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
 * Recursively finds the kth smallest value in a binary search tree.
 * @param {TreeNode | null} current - The current node in the binary search tree.
 * @param {number} k - The kth smallest value to find.
 * @param {number[]} resultingArray - The array to store the values in.
 */
function findKthSmallest(current: TreeNode | null, k: number, resultingArray: number[]) {
    if(current === null) return; // if we reach a null node, return

    if(resultingArray.length === k) return; // if we have already found k values, return

    const leftNode = current.left; // get the left child of the current node

    findKthSmallest(leftNode, k, resultingArray); // recursively find the kth smallest value in the left subtree

    resultingArray.push(current.val); // push the current value onto the resulting array

    const rightNode = current.right; // get the right child of the current node

    findKthSmallest(rightNode, k, resultingArray); // recursively find the kth smallest value in the right subtree
}

/**
 * Finds the kth smallest value in a binary search tree.
 * @param {TreeNode | null} root - The root node of the binary search tree.
 * @param {number} k - The kth smallest value to find.
 * @returns {number} The kth smallest value in the binary search tree.
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    const resultingArray: number[] = []; // initialize an array to store the values in

    findKthSmallest(root, k, resultingArray); // find the kth smallest value in the binary search tree

    return resultingArray[k-1]; // return the kth smallest value
};
