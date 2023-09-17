/**
 * A class representing a node in a binary tree.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    /**
     * Creates a new TreeNode object.
     * @param {number} val - The value of the node.
     * @param {TreeNode | null} left - The left child of the node.
     * @param {TreeNode | null} right - The right child of the node.
     */
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Recursively searches for a node with the specified value in a binary tree.
 * @param {TreeNode} current - The current node being searched.
 * @param {number} targetValue - The value of the node being searched for.
 * @param {TreeNode[]} stack - The stack of nodes to search through.
 * @returns {TreeNode | null} The node with the specified value, or null if it is not found.
 */
function findTarget(current: TreeNode , targetValue: number, stack: TreeNode[]): TreeNode | null {

    if(current.val === targetValue) {
        return current;
    }

    const leftNode =  current.left;
    const rightNode = current.right;

    if(leftNode !== null) {
        stack.push(leftNode);
    }

    if(rightNode !== null) {
        stack.push(rightNode);
    }

    const nextNode = stack.pop();

    if(nextNode === undefined) {
        return null;
    }

    return findTarget(nextNode, targetValue, stack);
}

/**
 * Returns a copy of the node in a binary tree with the same value as the specified target node.
 * @param {TreeNode | null} original - The original binary tree.
 * @param {TreeNode | null} cloned - The cloned binary tree.
 * @param {TreeNode | null} target - The target node to search for.
 * @returns {TreeNode | null} A copy of the node in the cloned binary tree with the same value as the target node, or null if it is not found.
 */
function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    const stack = [];

    if(cloned === null) {
        return null;
    }

    if(target === null) {
        return null;
    }

    return findTarget(cloned, target.val, stack);
};
