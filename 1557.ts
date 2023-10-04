/**
 * Finds the nodes in a directed graph that have no incoming edges.
 * @param {number} n - The number of nodes in the graph.
 * @param {number[][]} edges - The edges in the graph.
 * @returns {number[]} The nodes in the graph that have no incoming edges.
 */
function findNodesWithoutInputs(n: number, edges: number[][]): number[] {
    const result: Set<number> = new Set(); // initialize a set to store the nodes that have no incoming edges

    for(let i=0;i<n;i++) {
        result.add(i); // add all nodes to the set
    }

    for(let i=0;i<edges.length;i++) {
        const edge = edges[i];
        const output = edge[1]; // get the output node of the edge

        if(result.has(output)) { // if the output node is in the set
            result.delete(output); // remove the output node from the set, since it has an incoming edge
        }
    }

    return Array.from(result); // return the nodes that have no incoming edges as an array
}

/**
 * Finds the smallest set of vertices that can reach all other vertices in a directed graph.
 * @param {number} n - The number of nodes in the graph.
 * @param {number[][]} edges - The edges in the graph.
 * @returns {number[]} The smallest set of vertices that can reach all other vertices in the graph.
 */
function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    return findNodesWithoutInputs(n, edges); // return the nodes in the graph that have no incoming edges
};



const n = 5; // number of nodes in the graph

const edges = [ // edges in the graph
    [1,3],[2,0],[2,3],[1,0],[4,1],[0,3]
];

/*

const n = 100000; // number of nodes in the graph


*/


console.log(findSmallestSetOfVertices(n,edges)); // print the smallest set of vertices that can reach all other vertices in the graph