/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 台阶可覆盖最大范围
  let maximum = nums[0]
  const n = nums.length
  if (maximum >= n - 1) return true
  for (let i = 1;i < n && maximum >= i;i++) {
    maximum = Math.max(maximum, nums[i] + i)
    if (maximum >= n - 1) return true
  }
  return false
};