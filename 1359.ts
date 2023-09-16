const MODULO = 10**9 + 7;

/**
 * Counts the number of possible orders for n deliveries
 * @param {number} n - The number of deliveries
 * @returns {number} - The number of possible orders
 */
function countOrders(n: number): number {
    let result = 1; // base case n = 1
    for(let i=2;i<n+1;i++) { // case n > 1
        // we have an array of 2 * i posible positions
        const pickupPositions = 2 * i - 1; // it can be placed anywhere except the end of the array
        const deliveryPositions = i; //it has to be after pickup, so there's only i choises

        // we multiply to get the result and apply the modulo operation to comply with requested output
        result = (result * pickupPositions * deliveryPositions) % MODULO;
    }

    return result;
};

console.log(countOrders(3));
