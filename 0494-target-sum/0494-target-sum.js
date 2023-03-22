/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // 因为 -1000 <= target <= 1000
  // 数组索引只能为正数  所以 这里设置为 2000
  const offset = 1000
  const w = 2000
  const n = nums.length
  const dp = Array.from({ length: n }, () => Array(w + 1).fill(0))
  dp[0][offset + nums[0]]++
  dp[0][offset - nums[0]]++
  for (let i = 1;i < n;i++) {
    for (let j = 0;j <= w;j++) {
      if (j - nums[i] >= 0 && j - nums[i] <= w) {
        dp[i][j] += dp[i - 1][j - nums[i]]
      }
      if (j + nums[i] >= 0 && j + nums[i] <= w) {
        dp[i][j] += dp[i - 1][j + nums[i]]
      }
    }
  }
  return dp[n - 1][target + offset]
};