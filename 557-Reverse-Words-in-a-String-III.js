/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    let words = s.split(' ')
    let result = []
    for (let word of words) {
        result.push(reverse(word))
    }

    return result.join(' ')
    
    function reverse(word) {
        let chars = word.split('')
        let ptr1 = 0
        let ptr2 = chars.length - 1
        while (ptr1 < ptr2) {
            let temp = chars[ptr1]
            chars[ptr1] = chars[ptr2]
            chars[ptr2] = temp

            ptr1++
            ptr2--
        }
        return chars.join('')
    }
};