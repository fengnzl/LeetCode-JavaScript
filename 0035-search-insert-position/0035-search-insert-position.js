/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const n = nums.length
  let [low, high] = [0, n - 1]
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    } else {
      if (mid === n - 1 || nums[mid + 1] > target) {
        return mid + 1
      }
      low = mid + 1
    }
  }
  return -1
};