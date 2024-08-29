/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    function dfs(u, g, vis) {
        vis[u] = true;
        for (let child of g[u]) {
            if (!vis[child]) {
                dfs(child, g, vis);
            }
        }
    }
    const n = stones.length;
    const g = Array.from({ length: n }, () => []);
    const vis = Array(n).fill(false);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                g[i].push(j);
                g[j].push(i);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!vis[i]) {
            cnt++;
            dfs(i, g, vis);
        }
    }

    return n - cnt;
};