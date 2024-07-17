/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let minPrice = Infinity
let maxProfit = 0

for (let i = 0; i<prices.length; i++){
    if (prices[i] < minPrice){
        minPrice = prices[i]
    }else {
        let profit = prices[i]-minPrice
        if ( profit > maxProfit){
            maxProfit = profit
        }
    }
}
return maxProfit


    // const min = Math.min(...prices)
    // const startIndex= prices.indexOf(min)
    // let newprices = prices.slice(startIndex)
    // const max = Math.max(...newprices)
    // return max - min
};