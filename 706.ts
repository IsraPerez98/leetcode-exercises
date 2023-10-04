/**
 * A class representing a hash map.
 */
class MyHashMap {

    /**
     * An array to store the key-value pairs.
     * @type {number[]}
     */
    data: number[];

    /**
     * Creates a new instance of MyHashMap.
     */
    constructor() {
        this.data = []; // initialize the array
    }

    /**
     * Adds a key-value pair to the hash map.
     * @param {number} key - The key to add.
     * @param {number} value - The value to add.
     */
    put(key: number, value: number): void {
        this.data[key] = value;
    }

    /**
     * Gets the value associated with a key in the hash map.
     * @param {number} key - The key to get the value for.
     * @returns {number} The value associated with the key, or -1 if the key is not in the hash map.
     */
    get(key: number): number {
        const value = this.data[key];

        if(value === undefined) return -1; // if the key is not in the array, return -1

        return value;
    }

    /**
     * Removes a key-value pair from the hash map.
     * @param {number} key - The key to remove.
     */
    remove(key: number): void {
        delete this.data[key];
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
