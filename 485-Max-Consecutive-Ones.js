/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let currCount = 0;
    for (item of nums) {
        if (item === 1) {
            currCount++;

            if (currCount > maxCount) {
                maxCount = currCount
            }
        } else {
            currCount = 0
        }
    }
    return maxCount
};