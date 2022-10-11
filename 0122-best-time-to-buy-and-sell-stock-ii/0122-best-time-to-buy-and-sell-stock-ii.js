/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length
  const dp = Array.from({ length: n }, () => Array(2).fill(0))
  // dp[i][0] 代表当天不持有股票的最大值
  // dp[i][1] 代表当天持有股票的最大值
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1;i < n;i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  // 最后一天不持有股票的利润最大
  return dp[n - 1][0]
};