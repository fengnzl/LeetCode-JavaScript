/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (!n) return 0
  const dp = Array.from({ length: n }, () => Array(2).fill(0))
  // dp[i][0] 代表 i 晚上不偷时的最大金额
  // dp[i][1] 代表 i 晚上偷时的最大金额
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for(let i = 1;i < n;i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
};