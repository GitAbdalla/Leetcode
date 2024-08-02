/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const N = nums.length;
    const totalOnes = nums.reduce((count, num) => count + num, 0);
    
    let left = 0;
    let windowOnes = 0;
    let maxWindowOnes = 0;
    
    for (let i = 0; i < 2 * N; i++) {
        if (nums[i % N] === 1) {
            windowOnes += 1;
        }
        if (i - left + 1 > totalOnes) {
            if (nums[left % N] === 1) {
                windowOnes -= 1;
            }
            left += 1;
        }
        maxWindowOnes = Math.max(maxWindowOnes, windowOnes);
    }
    
    return totalOnes - maxWindowOnes;
}
