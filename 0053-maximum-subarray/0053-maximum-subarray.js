/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = -Infinity
  let count = 0
  for (let i = 0;i < nums.length;i++) {
    count += nums[i]
    ans = Math.max(ans, count)
    // 如果当前累计值小于 0 则重新计数，因为后续连续累加只会降低其总和
    if (count < 0) count = 0
  }
  return ans
};