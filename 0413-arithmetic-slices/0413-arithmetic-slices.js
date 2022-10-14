/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length
  if (n < 3) return 0
  const dp = Array(n).fill(0)
  for (let i = 1;i < n - 1;i++) {
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      dp[i] = dp[i - 1] + 1
    }
  }
  return dp.reduce((prev, cur) => prev + cur)
};