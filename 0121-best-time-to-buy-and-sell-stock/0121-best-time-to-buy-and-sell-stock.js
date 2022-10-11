/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length
  if (n === 1) return 0
  let min = prices[0]
  let profit = 0
  for (let i = 1;i < n;i++) {
    if (prices[i] < min) min = prices[i]
    if (prices[i] - min > profit) profit = prices[i] - min
  }
  return profit
};