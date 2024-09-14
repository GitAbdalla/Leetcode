/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let string = []

    for (let i = 0; i < indices.length; i++) {
        string[indices[i]] = s[i]
    }
    return string.join("")
};