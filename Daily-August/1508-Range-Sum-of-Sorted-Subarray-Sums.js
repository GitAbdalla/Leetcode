/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 10**9 + 7
    let arrSum = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            arrSum.push(sum)
        }
    }
    let sumSorted = arrSum.sort((a, b) => a - b)
    let result = sumSorted.slice(left -1 , right).reduce((acc, num) => (acc + num) % MOD, 0);

    return result;

};