/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let contentChildren = 0

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = 0
    let j = 0
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            contentChildren++
            i++
        }
        j++
    }
    return contentChildren
};