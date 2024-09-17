/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let temp = [...arr]

    arr.sort((a, b) => a - b)

    let rankMap = new Map()
    let rank = 1
    for (let num of arr) {
        if (!rankMap.has(num)) {
            rankMap.set(num, rank++)
        }
    }
    return temp.map(num => rankMap.get(num))
};