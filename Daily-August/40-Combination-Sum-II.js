/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let ans = [];
    let tmp = [];
    let n = candidates.length;
    candidates.sort((a, b) => a - b);
    function solve(idx, target) {
        if (target === 0) {
            ans.push([...tmp]);
            return;
        }
        if (target < 0 || idx === n) return;
        tmp.push(candidates[idx]);
        solve(idx + 1, target - candidates[idx]);
        tmp.pop();

        while (idx + 1 < n && candidates[idx] === candidates[idx + 1]) idx++;
        solve(idx + 1, target);
    }
    solve(0, target);
    return ans;
};