/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let x= s.split(\\).sort().join(\\)
    let y= t.split(\\).sort().join(\\)
     if(x===y){
        return true
     }else{
        return false
     }  
};