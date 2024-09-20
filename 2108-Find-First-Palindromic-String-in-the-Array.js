/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    for (let word of words) {
        if (isPalindrome(word)) {
            return word
        }
    }
    return ""

    function isPalindrome(word) {
        let ptr1 = 0
        let ptr2 = word.length - 1
        while (ptr1 < ptr2) {
            if (word[ptr1] !== word[ptr2]) {
                return false
            } else
            ptr1++
            ptr2--
        }
        return true
    }
}

