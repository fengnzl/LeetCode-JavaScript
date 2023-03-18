/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // 本质是计算最长递增子序列
  // 使用 a 和 b 代替前两位递增的序列，只要使用 nums[i] 进行判断即可
  const len = nums.length
  if (len < 3) return false
  let a = nums[0]
  let b = Number.MAX_SAFE_INTEGER
  for (let i = 1;i < len;i++) {
    if (nums[i] > b) {
      return true
    } else {
      if (nums[i] <= a) {
        a = nums[i]
      } else {
        b = nums[i]
      }
    }
  }
  return false
};
