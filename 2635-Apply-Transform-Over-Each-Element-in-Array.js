/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const test = [];
  for(let i=0;i<arr.length;i++){
    test.push(fn(arr[i],i))
  }
  return test
}
