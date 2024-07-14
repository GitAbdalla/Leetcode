/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let reverseS =""
    for (let i = s.length -1; i >=0; i--){
        reverseS +=s[i]
    }
   
    return s === reverseS
};