/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const ans = [];
    ans.push([rStart, cStart]);
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let dir = 0;
    let steps = 0;
    while (ans.length !== rows * cols) {
        if (dir === 0 || dir === 2) steps++;
        for (let i = 0; i < steps; i++) {
            rStart += dx[dir];
            cStart += dy[dir];
            if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                ans.push([rStart, cStart]);
            }
        }
        dir = (dir + 1) % 4;
    }
    return ans;
};