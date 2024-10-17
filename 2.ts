/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Builds a linked list from an array of numbers.
 * 
 * @param {number[]} numbers - The array of numbers to convert into a linked list.
 * @returns {ListNode} The head of the linked list.
 */
function buildListNode(numbers: number[]) {
    let previousResult = new ListNode(numbers[numbers.length-1]);

    // We traverse it backwards in order to set the next value for every node
    for(let i = numbers.length - 2; i >= 0; i--) {
        previousResult = new ListNode(numbers[i], previousResult);
    }

    return previousResult;
}


/**
 * Adds two numbers represented by linked lists and returns the sum as a linked list.
 * Each node contains a single digit and the digits are stored in reverse order.
 * 
 * @param {ListNode | null} l1 - The first linked list.
 * @param {ListNode | null} l2 - The second linked list.
 * @returns {ListNode | null} The linked list representing the sum of the two numbers.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let nextL1: ListNode | null = l1;
    let nextL2: ListNode | null = l2;

    // Determines if we should add 1 to the total sum of the current digit
    let carried = false;

    let result: number[] = [];

    while(nextL1 !== null || nextL2 !== null) {

        const l1Value = nextL1 ? nextL1.val : 0;
        
        const l2Value = nextL2 ? nextL2.val : 0;

        let sumResult = l1Value + l2Value;

        if(carried) {
            sumResult += 1;
        }

        const moduloTen = sumResult % 10;

        if(moduloTen !== sumResult) {
            result.push(moduloTen);
            carried = true;
        } else {
            result.push(sumResult);
            carried = false;
        }

        nextL1 = nextL1 ? nextL1.next : null;
        nextL2 = nextL2 ? nextL2.next : null;
    }

    if(carried) {
        result.push(1);
    }

    return buildListNode(result);    
};