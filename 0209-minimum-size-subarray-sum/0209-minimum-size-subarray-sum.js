/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var minSubArrayLen = function(target, nums) {
  const len = nums.length
  let [l, r, sum] = [0, 0, 0]
  let ans = len + 1
  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      if (ans > r - l) {
        ans = r- l
      }
      sum -= nums[l++]
    }
  }
  return ans > len ? 0 : ans
};