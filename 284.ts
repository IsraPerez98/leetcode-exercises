// This is the Iterator's API interface.
// You should not implement it, or speculate about its implementation
class Iterator {
    hasNext(): boolean {return false}
    next(): number { return 0}
}


class PeekingIterator {

    iterator: Iterator;
    current: number;
    hasNextValue: boolean;

    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.hasNextValue = this.iterator.hasNext();
        this.current = iterator.next();
    }

    peek(): number {
        return this.current;
    }

    next(): number {
        const currentValue = this.current;
        this.hasNextValue = this.iterator.hasNext();
        this.current = this.iterator.next();
        return currentValue;
    }

    hasNext(): boolean {
        return this.hasNextValue;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
