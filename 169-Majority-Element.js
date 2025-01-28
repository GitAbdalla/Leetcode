/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = null;
    let cnt = 0;
    for (const num of nums) {
        if (cnt === 0) {
            candidate = num;
            cnt = 1;
        } else if (num === candidate) {
            cnt++
        }else{
            cnt--
        }
    }
    return candidate
};