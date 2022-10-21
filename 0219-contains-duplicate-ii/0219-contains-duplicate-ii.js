/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const n = nums.length
  for (let i = 0;i < n;i++) {
    for (let j = i + 1;j < n;j++) {
      if (nums[i] === nums[j] && j - i <= k) {
        return true
      }
    }
  }
  return false
};