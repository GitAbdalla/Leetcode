/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
   let leftSum =0
   let rightSum =0
   const totalSum = nums.reduce((acc ,num) => acc+ num,0)
   for (let i =0; i < nums.length; i++){
     rightSum = totalSum - nums[i] - leftSum
     if (rightSum === leftSum){
        return i
    }else {
    leftSum += nums[i]
    }
   }
   return -1
}