/**
 * @param {number[][]} grid
 * @return {number}
 */
function isMagicSquare(x, y, grid) {
    let row = new Array(3).fill(0);
    let col = new Array(3).fill(0);
    let vis = new Array(16).fill(0);
    let d1 = 0, d2 = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            vis[grid[x + i][y + j]]++;
            row[i] += grid[x + i][y + j];
            col[j] += grid[x + i][y + j];
            if (i === j) d1 += grid[x + i][y + j];
            if (i + j === 2) d2 += grid[x + i][y + j];
        }
    }

    if (d1 !== d2) return false;
    for (let i = 0; i < 3; i++) {
        if (d1 !== row[i] || d1 !== col[i]) return false;
    }
    for (let i = 1; i <= 9; i++) {
        if (vis[i] !== 1) return false;
    }
    return true;
}

function numMagicSquaresInside(grid) {
    let cnt = 0;

    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            if (isMagicSquare(i, j, grid)) {
                cnt++;
            }
        }
    }

    return cnt;
}