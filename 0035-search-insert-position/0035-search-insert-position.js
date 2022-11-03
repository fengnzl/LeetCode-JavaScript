/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 找到第一个大于等于 target 的位置
var searchInsert = function(nums, target) {
  const n = nums.length
  let [low, high] = [0, n - 1]
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] >= target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      } else {
        high = mid - 1
      }
    } else {
      low = mid + 1
    }
  }
  return n
};