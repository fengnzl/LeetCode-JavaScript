/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length
  if (n === 1) return 0
  const dp = Array.from({ length: n }, () => Array(4).fill(0))
  // dp[i][0] 代表手中持有股票
  // dp[i][1] 代表手中没有股票(当天刚卖掉)
  // dp[i][2] 代表手中没有股票(处于冷冻期)
  // dp[i][3] 第 i 天不持有股票时的最大利润，昨天也没有持有
  dp[0][0] = -prices[0]
  for (let i = 1;i < n;i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i], dp[i - 1][3] - prices[i])
    dp[i][1] = dp[i - 1][0] + prices[i]
    dp[i][2] = dp[i - 1][1]
    dp[i][3] = Math.max(dp[i - 1][2], dp[i - 1][3])
  }
  return Math.max.apply(null, dp[n - 1])
};