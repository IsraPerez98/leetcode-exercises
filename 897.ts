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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Converts a binary tree to an array in increasing order.
 * @param {TreeNode} current - The current node in the binary tree.
 * @param {number[]} valuesArray - The array to store the values in.
 */
function convertTreeToArray(current: TreeNode | null, valuesArray: number[]): void {
    if(current === null) return;

    convertTreeToArray(current.left, valuesArray);

    valuesArray.push(current.val);

    convertTreeToArray(current.right, valuesArray);
}

/**
 * Builds a binary search tree from an array of values in increasing order.
 * @param {number[]} valuesArray - The array of values in increasing order.
 * @returns {TreeNode | null} The root node of the binary search tree.
 */
function buildInOrderTree(valuesArray: number[]): TreeNode | null {
    let prevNode: TreeNode | null = null;
    for(let i=valuesArray.length-1;i>=0;i--) {
        const newNode = new TreeNode(valuesArray[i], undefined, prevNode);
        prevNode = newNode;
    }

    return prevNode;
}

/**
 * Converts a binary tree to a binary search tree in increasing order.
 * @param {TreeNode | null} root - The root node of the binary tree.
 * @returns {TreeNode | null} The root node of the binary search tree.
 */
function increasingBST(root: TreeNode | null): TreeNode | null {
    const valuesArray: number[] = [];

    convertTreeToArray(root, valuesArray);

    return buildInOrderTree(valuesArray);
};
