/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let distinctArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            distinctArr.push(arr[i]);
        }
    }
    
    return distinctArr.length >= k ? distinctArr[k - 1] : "";
};