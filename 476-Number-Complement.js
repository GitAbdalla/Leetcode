/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    // let binaryNum = new Array(num.toString(2))
    // let binaryStr = binaryNum[0].split('').map(Number)
    // let complement = []
    // for (let i = 0; i < binaryStr.length; i++) {
    //     if (binaryStr[i] === 0) {
    //         complement.push(1)
    //     } else if (binaryStr[i] === 1) {
    //         complement.push(0)
    //     }

    // }
    // complement = complement.join('')
    // let res = parseInt(complement, 2)
    // return res

    let binaryNum = num.toString(2)
    let complement = ''

    for(let i =0; i< binaryNum.length; i++){
        if(binaryNum[i] === '0'){
            complement += '1'
        }else {
            complement += '0'
        }
    }
    return parseInt(complement,2)
};