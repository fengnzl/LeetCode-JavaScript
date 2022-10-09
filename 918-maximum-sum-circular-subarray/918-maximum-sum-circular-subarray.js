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
  // let max = nums[0]
  // let min = nums[0]
  // let prevMax = 0
  // let prevMin = 0
  // let sum = 0
  // const n = nums.length
  // for (let i = 0;i < n;i++) {
  //   sum += nums[i]
  //   prevMax = prevMax + nums[i] > nums[i] ? prevMax + nums[i] : nums[i]
  //   if (prevMax > max) max = prevMax
  //   prevMin = prevMin + nums[i] < nums[i] ? prevMin + nums[i] : nums[i]
  //   if (prevMin < min) min = prevMin
  // }
  // if (max < 0) return max
  // return sum - min > max ? sum - min : max
  
  const n = nums.length
  const dp1 = Array(n).fill(0)
  const dp2 = Array(n).fill(0)
  let max = nums[0]
  let min = nums[0]
  let total = nums[0]
  dp1[0] = dp2[0] = nums[0]
  for (let i = 1;i < n;i++) {
    total += nums[i]
    dp1[i] = Math.min(dp1[i - 1] + nums[i], nums[i])
    if (dp1[i] < min) min = dp1[i]
    dp2[i] = Math.max(dp2[i - 1] + nums[i], nums[i])
    if (dp2[i] > max) max = dp2[i]
  }
  if (max < 0) return max
  return total - min > max ? total - min : max
};