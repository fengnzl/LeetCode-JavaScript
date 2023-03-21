/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length <= 1) return false
  let maxNum = 0
  const sum = nums.reduce((prev, cur) => {
    if (cur > maxNum) maxNum = cur
    return prev + cur
  }, 0)
  // 如果是奇数
  if (sum & 1 !== 0) return false
  const mid = sum / 2
  // 如果最大的数大于中间数，说明无法使两数相等
  if (maxNum > mid) return false
  const n = nums.length
  // const dp = Array.from({ length: n }, () => Array(mid + 1).fill(0))
  // dp[0][0] = dp[0][nums[0]] = true
  // for (let i = 1;i < n;i++) {
  //   for (let j = 0;j <= mid;j++) {
  //     if (dp[i - 1][j] || (j - nums[i] >= 0 && dp[i - 1][j - nums[i]])) {
  //       dp[i][j] = true
  //     }
  //   }
  // }
  // return dp[n - 1][mid]
  const dp = Array(mid + 1).fill(false)
  dp[0] = dp[nums[0]] = true
  for (let i = 1;i < n;i++) {
    for (let j = mid;j >= 0;j--) {
      if (dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]])) {
        dp[j] = true
      }
    }
  }
  return dp[mid]
};