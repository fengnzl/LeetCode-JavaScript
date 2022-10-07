/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  // 第0间不偷，只偷  1 ～ n - 1 
  const max1 = robFn(nums, 1, n - 1)
  // 第 0 间偷， 偷 2 ～ n - 2
  const max2 = nums[0] + robFn(nums, 2, n - 2)
  return Math.max(max1, max2)
  
  function robFn(nums, p, r) {
    const dp = Array.from({ length: r + 1}, () => Array(2).fill(0))
    for (let i = p;i <= r;i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
      dp[i][1] = nums[i] + dp[i - 1][0]
    }
    return Math.max(dp[r][0], dp[r][1])
  }
};