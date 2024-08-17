/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const n = points.length;
    const m = points[0].length;

    let old = new Array(m).fill(0).map((_, j) => points[0][j]);

    for (let i = 1; i < n; i++) {
        let l = new Array(m);
        let r = new Array(m);
        l[0] = old[0];
        r[m - 1] = old[m - 1];
        for (let j = 1; j < m; j++) {
            l[j] = Math.max(old[j], l[j - 1] - 1);
        }
        for (let j = m - 2; j >= 0; j--) {
            r[j] = Math.max(old[j], r[j + 1] - 1);
        }

        for (let j = 0; j < m; j++) {
            old[j] = Math.max(l[j], r[j]) + points[i][j];
        }
    }
    return Math.max(...old);
};