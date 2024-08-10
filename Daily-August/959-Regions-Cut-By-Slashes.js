/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
       const n = grid.length;
    const n2 = n * 3;
    const grid2 = Array.from({ length: n2 }, () => Array(n2).fill(false));


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const ii = i * 3;
            const jj = j * 3;
            if (grid[i][j] === '\\') {
                grid2[ii][jj] = true;
                grid2[ii + 1][jj + 1] = true;
                grid2[ii + 2][jj + 2] = true;
            }
            if (grid[i][j] === '/') {
                grid2[ii][jj + 2] = true;
                grid2[ii + 1][jj + 1] = true;
                grid2[ii + 2][jj] = true;
            }
        }
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n2 || j >= n2 || grid2[i][j]) return;
        grid2[i][j] = true;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    let cnt = 0;
    for (let i = 0; i < n2; i++) {
        for (let j = 0; j < n2; j++) {
            if (!grid2[i][j]) {
                cnt++;
                dfs(i, j);
            }
        }
    }

    return cnt;
}