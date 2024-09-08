/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let right = s.length - 1;
    let left = 0;

    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }

    return true;
};
