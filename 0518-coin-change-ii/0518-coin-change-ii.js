/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const n = coins.length
  const dp = Array(amount + 1).fill(0)
  // 不选择任何硬币的时候，金额之和才为0 此时只有一种硬币组合
  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin;i <= amount;i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
};