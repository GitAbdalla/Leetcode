/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let n = nums
    for (let i = 0; i < n.length; i++) {
        let count = 0
        for (let j = 0; j < n.length; j++) {
            if (n[i] === n[j]) {
                count++
            }
        }
        if (count > n.length / 2) {
            return n[i]
        }
    }

};