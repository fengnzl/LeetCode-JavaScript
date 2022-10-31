/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1]
  const start = findTarget(nums, target)
  const end = findTarget(nums, target, true)
  return [start, end]
  function findTarget(nums, target, isLast = false) {
    let [low, high, len] = [0, nums.length - 1, nums.length]
    while (low <= high) {
      // const mid = Math.floor(low + (high - low) / 2)
      const mid = low + ((high - low) >> 1);
      if (nums[mid] === target) {
        if (!isLast) {
          if (mid === 0 || nums[mid - 1] < target) {
            return mid
          } else {
            high = mid - 1
          }
        } else {
          if (mid === len - 1 || nums[mid + 1] > target) {
            return mid
          } else {
            low = mid + 1
          }
        }
      } else if (nums[mid] < target) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    return -1
  }
};