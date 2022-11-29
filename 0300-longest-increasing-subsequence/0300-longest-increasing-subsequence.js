/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len === 0) return 0
  const dp = Array(len).fill(1)
  for (let i = 1;i < len;i++) {
    for (let j = 0;j < i;j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max.apply(null, dp)
};