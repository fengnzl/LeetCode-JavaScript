/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
var maxProduct = function(nums) {
  const n = nums.length
  const dpMin = Array(n).fill(0)
  const dpMax = Array(n).fill(0)
  dpMin[0] = dpMax[0] = nums[0]
  let max = nums[0]
  for (let i = 1;i < n;i++) {
    const dpMinProduct = dpMin[i - 1] * nums[i]
    const dpMaxProduct = dpMax[i - 1] * nums[i]
    dpMax[i] = Math.max(dpMinProduct, nums[i], dpMaxProduct)
    dpMin[i] = Math.min(dpMinProduct, nums[i], dpMaxProduct)
    if (max < dpMax[i]) max = dpMax[i]
  }
  return max
};

// greedy
// var maxProduct = function(nums) {
//   const n = nums.length
//   if (n === 1) return nums[0]
//   let max = 1
//   let min = 1
//   let result = -Infinity
//   for (let i = 0;i < n;i++) {
//     // 如果当前小于 0  则交换最大值和最小值
//     if (nums[i] < 0) {
//       [max, min] = [min, max]
//     }
//     max = Math.max(max * nums[i], nums[i])
//     min = Math.min(min * nums[i], nums[i])
//     if (max > result) result = max
//   }
//   return result
// }