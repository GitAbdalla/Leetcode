/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let vis = new Array(26).fill(0);

    for (let ch of word) {
        vis[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    vis.sort((a, b) => b - a);
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        ans += vis[i] * Math.floor(i / 8 + 1);
    }
    return ans;
}