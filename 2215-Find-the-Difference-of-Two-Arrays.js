/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let one = [...new Set(nums1)]
    let two = [...new Set(nums2)]
    let ans = [[], []]
    for (let i = 0; i < one.length; i++) {
        if (!two.includes(one[i]))
            ans[0].push(one[i])
    }
    for (let j = 0; j < two.length; j++) {
        if (!one.includes(two[j])) {
            ans[1].push(two[j])
        }
    }
    return ans
}


