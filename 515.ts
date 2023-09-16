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

type NodeElement = {
    treeNode: TreeNode;
    depth: number;
}

/**
 * Processes a node element by checking if its value is greater than the current maximum value at its depth
 * @param {NodeElement} currentElement - The current node element to process
 * @param {number[]} maxNumbers - The array of maximum values at each depth
 */
function processNodeElement(currentElement: NodeElement, maxNumbers: number[]): void {
    const depth = currentElement.depth;
    const value = currentElement.treeNode.val;

    const currentMaxNumber = maxNumbers[depth];

    if( currentMaxNumber === undefined || currentMaxNumber < value) {
        maxNumbers[depth] = value;
    }
}

/**
 * Processes the graph using BFS and calls processNodeElement on each node
 * @param {NodeElement} currentElement - The current node element to process
 * @param {NodeElement[]} queue - The queue of node elements to process
 * @param {number[]} maxNumbers - The array of maximum values at each depth
 */
function processGraphBFS(currentElement: NodeElement, queue: NodeElement[], maxNumbers: number[]) {

    const currentTreeNode = currentElement.treeNode

    const leftNode = currentTreeNode.left;
    const rightNode = currentTreeNode.right;

    // Add left node to the queue if it exists
    if(leftNode !== null) {
        const leftQueueElement: NodeElement = {
            treeNode: leftNode,
            depth: currentElement.depth + 1,
        }

        queue.push(leftQueueElement);
    }

    // Add right node to the queue if it exists
    if(rightNode !== null) {
        const rightQueueElement: NodeElement = {
            treeNode: rightNode,
            depth: currentElement.depth + 1,
        }
        queue.push(rightQueueElement)
    }

    // Process the current element
    processNodeElement(currentElement, maxNumbers);

    // Get the next element from the queue and process it recursively
    const nextElement = queue.shift();

    if(nextElement === undefined) return; // End of recursion

    processGraphBFS(nextElement, queue, maxNumbers);

}


/**
 * Returns an array of the largest value at each depth of the tree
 * @param {TreeNode | null} root - The root node of the tree
 * @returns {number[]} - The array of maximum values at each depth
 */
function largestValues(root: TreeNode | null): number[] {
    if(root === null) {
        return [];
    }

    const rootElement: NodeElement = {
        treeNode: root,
        depth: 0,
    }

    let queue: NodeElement[] = [];

    let maxNumbers: number[] = [];

    // Process the graph using BFS starting from the root element
    processGraphBFS(rootElement, queue, maxNumbers);

    return maxNumbers;
};
