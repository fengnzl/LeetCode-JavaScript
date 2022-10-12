/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const n = prices.length
  if (n === 1) return 0
  const dp = Array.from({ length: n }, () => Array(2).fill(0))
  // dp[i][0] 代表 i 天不持有股票时的利润
  // dp[i][1] 代表 i 天持有股票时的利润
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1;i < n;i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i][0] - prices[i], dp[i - 1][1])
  }
  return dp[n - 1][0]
};