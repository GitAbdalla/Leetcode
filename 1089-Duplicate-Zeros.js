/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let ptr1 = 0
    let ptr2 = arr.length - 1

    while (ptr1 < ptr2) {
        if (arr[ptr1] === 0) {
            arr.pop()
            arr.splice(ptr1 + 1, 0, 0)
            ptr1 += 2
        } else {
            ptr1++
        }
    }
};