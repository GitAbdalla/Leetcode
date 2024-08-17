/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let arr = []
    let ops = operations
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] !== \+\ && ops[i] !== \D\ && ops[i] !== \C\) {
            let x = ops[i] * 1
            arr.push(x)
        } else if (ops[i] === \+\) {
            arr.push(arr[arr.length - 1]  + arr[arr.length - 2])
        } else if (ops[i] === \D\) {
            arr.push(arr[arr.length - 1] * 2)
        } else if (ops[i] === \C\){
            arr.pop()
        }
    }
    const sum = arr.reduce((acc, num) => acc + num, 0)
    return sum
};