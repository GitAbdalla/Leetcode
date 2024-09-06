/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let greaters = [];
    let res = letters[0];
    
    for (let char of letters) {
        if (char > target) {
            greaters.push(char);
        }
    }
    if (greaters.length > 0) {
        res = greaters[0];
        for (let charr of greaters) {
            if (charr < res) {
                res = charr;
            }
        }
    }


    return res;
};