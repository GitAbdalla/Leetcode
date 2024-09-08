/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = ""
    let ptr1 = 0
    let ptr2 = 0
    while (ptr1 < word1.length || ptr2 < word2.length) {
        if (ptr1 < word1.length) {
            res += word1[ptr1]
            ptr1++
        }
        if (ptr2 < word2.length) {
            res += word2[ptr2]
            ptr2++
        }

    }
    return res
};