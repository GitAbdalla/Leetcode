/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0
const INT_MIN = Number.MIN_SAFE_INTEGER
    let previousElement = INT_MIN

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > previousElement && (i + 1 >= nums.length || nums[i] > nums[i + 1])) {
            return i
        }
        previousElement = nums[i]
    }
    return nums.length - 1
};
// Complexity o(n)