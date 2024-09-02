/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let preMax = nums[0]
    let preMin = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {

        let currMax = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin)
        let currMin = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin)

        preMin = currMin
        preMax = currMax

        result = Math.max(result,currMax)
    }
    return result
};