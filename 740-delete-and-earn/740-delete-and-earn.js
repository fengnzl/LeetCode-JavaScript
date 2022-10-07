/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  // count every num appears then treat it like House Robber problem
  const counts = []
  for (const val of nums) {
    counts[val] = (counts[val] || 0) + 1
  }
  const n = counts.length
  for (let i = 0;i < n;i++) {
    if (counts[i] == undefined) {
      counts[i] = 0
    }
  }
  const dp = Array.from({ length: n }, () => Array(2).fill(0))
  for (let i = 1;i < n;i++) {
    // not earn current point
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    // earn current point
    dp[i][1] = dp[i - 1][0] + counts[i] * i
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
};