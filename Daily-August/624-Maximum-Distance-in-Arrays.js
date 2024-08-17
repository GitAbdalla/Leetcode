/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let minimum = Infinity;
    let max = -Infinity;
    let ans = 0;

    for (let i = 0; i < arrays.length; i++) {
        let size = arrays[i].length;

        ans = Math.max(ans, arrays[i][size - 1] - minimum);
        ans = Math.max(ans, max - arrays[i][0]);

        minimum = Math.min(minimum, arrays[i][0]);
        max = Math.max(max, arrays[i][size - 1]);
    }

    return ans;
};