/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let ptr1 = 0
    let ptr2 = 1
    let len = nums.length

    while (ptr2 < len) {
        if (nums[ptr1] !== nums[ptr2]) {
            ptr1++
            nums[ptr1] = nums[ptr2]

        } else {
            ptr2++
        }
    }
    return ptr1 + 1
};