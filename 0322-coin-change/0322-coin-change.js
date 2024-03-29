/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  const n = coins.length
  const dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1;i <= amount;i++) {
    for (let j = 0;j < n;j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
      }
    }
  }
  return dp[amount] === amount + 1 ?  -1 : dp[amount]
};