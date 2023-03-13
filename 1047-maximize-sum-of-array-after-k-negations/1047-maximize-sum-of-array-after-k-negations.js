/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // 局部最大全局最大
  // 因此先根据绝对值排序，然后对负数进行去反，如果负数取反完了 k 值还没清零
  // 只需对最小值来回去反即可
  // 返回最后的总和
  nums.sort((a, b) => Math.abs(a) - Math.abs(b))
  for (let i = nums.length - 1;i >= 0;i--) {
    if (nums[i] <= 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  while(k > 0) {
    nums[0] = -nums[0]
    k--
  }
  return nums.reduce((prev, cur) => prev + cur)
};