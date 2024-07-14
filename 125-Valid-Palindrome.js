/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s2 = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let reverseS = s2.split("").reverse().join("")
   
    return s2 === reverseS
};