/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let localSum = 0;
    let count = 0;
    let localSumCounter = { 0: 1 };
    for (let i = 0; i < nums.length; i++) {
        localSum += nums[i];
        if (localSumCounter[localSum - k] !== undefined) {
            count += localSumCounter[localSum - k];
        }
        localSumCounter[localSum] = localSumCounter[localSum] === undefined ? 1 : localSumCounter[localSum] + 1;
    }
    return count
};