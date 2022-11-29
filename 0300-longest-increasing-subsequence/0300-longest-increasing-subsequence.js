/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   const len = nums.length
//   if (len === 0) return 0
//   const dp = Array(len).fill(1)
//   for (let i = 1;i < len;i++) {
//     for (let j = 0;j < i;j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   return Math.max.apply(null, dp)
// };
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len === 0) return 0
  const res = Array(len)
  res[0] = -10001
  let ans = 0
  for (let i = 0;i < len;i++) {
    if (ans === 0 || nums[i] > res[ans - 1]) {
      res[ans] = nums[i]
      ans++
    } else {
      //  找到第一个大于 nums[i] 的位置
      const pos = getPos(res, ans, nums[i])
      res[pos] = nums[i]
    }
  }
  return ans
}
function getPos(nums, len, target) {
  let [low, high] = [0, len - 1]
  while (low <= high) {
    const mid = (high + low) >> 1 | 0
    if (nums[mid] > target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}