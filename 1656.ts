/**
 * A class representing an ordered stream of strings.
 */
class OrderedStream {

    /**
     * The array of strings in the stream.
     */
    stream: string[];

    /**
     * The pointer to the current position in the stream.
     */
    pointer: number;

    /**
     * Creates a new OrderedStream object.
     * @param {number} n - The number of strings in the stream.
     */
    constructor(n: number) {
        this.stream = [];
        this.pointer = 0;
    }

    /**
     * Inserts a string into the stream at the specified index.
     * @param {number} idKey - The index at which to insert the string.
     * @param {string} value - The string to insert.
     * @returns {string[]} An array of all the strings in the stream that can be returned in order.
     */
    insert(idKey: number, value: string): string[] {
        this.stream[idKey-1] = value;

        let returningArray: string[] = [];

        // Add all the strings in the stream that can be returned in order to the returningArray and return it
        while(true) {
            const currentValue = this.stream[this.pointer];
            if(currentValue === undefined) return returningArray;
            returningArray.push(currentValue);
            this.pointer++;
        }
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
