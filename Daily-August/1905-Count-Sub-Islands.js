/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
function dfs(x, y, grid1, grid2, n, m) {
    if (x < 0 || y < 0 || x >= n || y >= m) return true;
    if (grid2[x][y] && !grid1[x][y]) return false;
    if (!grid1[x][y] || !grid2[x][y]) return true;

    grid1[x][y] = 0;
    grid2[x][y] = 0;

    let up = dfs(x + 1, y, grid1, grid2, n, m);
    let down = dfs(x - 1, y, grid1, grid2, n, m);
    let right = dfs(x, y + 1, grid1, grid2, n, m);
    let left = dfs(x, y - 1, grid1, grid2, n, m);

    return up && down && right && left;
}

function countSubIslands(grid1, grid2) {
    let n = grid1.length, m = grid1[0].length;
    let islands = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid1[i][j] && grid2[i][j]) {
                if (dfs(i, j, grid1, grid2, n, m)) {
                    islands++;
                }
            }
        }
    }

    return islands;
}