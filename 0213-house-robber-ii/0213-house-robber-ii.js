/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  // 第0个偷 偷 2 ～ n-2 天
  const max1 = nums[0] + getCount(nums, 2, n - 2)
  // 第 0 个不偷，偷 1 ～ n - 1 天
  const max2 = getCount(nums, 1, n - 1)
  return Math.max(max1, max2)

  function getCount(nums, p, r) {
    const dp = Array.from({ length: r + 1 }, () => Array(2).fill(0))
    for(let i = p;i <= r;i++) {
      // 第 i 天不偷
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
      // 第 i 天偷
      dp[i][1] = dp[i - 1][0] + nums[i]
    }
    return Math.max(dp[r][0], dp[r][1])
  }
};