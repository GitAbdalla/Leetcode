/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let max = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums.includes(-nums[i])) {
            max = Math.max(nums[i], max)
        }
    }
    return max
}