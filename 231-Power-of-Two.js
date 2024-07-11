/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n > 0) {
        if (n === 1) {
            return true;
        } else if (n % 2 === 0) {
            n = n / 2;
        } else {
            return false;
        }
    }
    return false;
};