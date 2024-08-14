/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var count = function (dist, nums) {
    let cnt = 0;
    for (let ed = 0; ed < nums.length; ed++) {
        let st = nums.slice(0, ed + 1).findIndex(val => val >= nums[ed] - dist);
        if (st !== -1) {
            cnt += ed - st;
        }
    }
    return cnt;
};
var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    let st = 0, ed = nums[nums.length - 1] - nums[0], cur = -1, md;

    while (st <= ed) {
        md = Math.floor((st + ed) / 2); // assume answer
        if (count(md, nums) >= k) {
            cur = md;
            ed = md - 1;
        } else {
            st = md + 1;
        }
    }

    return cur;
};
