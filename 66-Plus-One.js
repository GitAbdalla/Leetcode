/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    lastIndex = digits.length - 1
    for (let i = lastIndex; i >= 0; i--) {
        digits[i] += 1
        if (digits[i] === 10) {
            digits[i] = 0

        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits

};