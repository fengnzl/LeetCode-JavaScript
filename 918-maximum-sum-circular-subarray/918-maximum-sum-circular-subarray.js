/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  /**
   * 最大序列和在中间 则与 53 题类似
   * 最大序列和在两边 由 最大和 = 总和 - 剩余的 =>  剩余的 = 总和 - 最大和 即 求中间最小和
   * 如果全为负数 第二种情况为0 第一种情况值小于 0 此时直接返回第一种情况值即可
   * 综上所述 取上述两种情况的最大值
   */
  let max = nums[0]
  let min = nums[0]
  let prevMax = 0
  let prevMin = 0
  let sum = 0
  const n = nums.length
  for (let i = 0;i < n;i++) {
    sum += nums[i]
    prevMax = prevMax + nums[i] > nums[i] ? prevMax + nums[i] : nums[i]
    if (prevMax > max) max = prevMax
    prevMin = prevMin + nums[i] < nums[i] ? prevMin + nums[i] : nums[i]
    if (prevMin < min) min = prevMin
  }
  if (max < 0) return max
  return sum - min > max ? sum - min : max
};