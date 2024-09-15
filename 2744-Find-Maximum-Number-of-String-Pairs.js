/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let map = new Map()
    let cnt = 0
    for (let word of words) {
        
        reversedWord = word[1] + word[0]

        if (map.has(reversedWord)) {
            cnt++
            map.delete(reversedWord)
        } else {
            map.set(word, true)
        }
    }
    return cnt
};
