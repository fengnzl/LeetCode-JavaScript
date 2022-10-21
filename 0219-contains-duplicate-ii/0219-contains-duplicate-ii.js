/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // 双层循环 O(n^2)
  // const n = nums.length
  // for (let i = 0;i < n;i++) {
  //   for (let j = i + 1;j < n;j++) {
  //     if (nums[i] === nums[j] && j - i <= k) {
  //       return true
  //     }
  //   }
  // }
  // return false
  // 双指针
  const n = nums.length
  const set = new Set()
  for (let i = 0;i < n;i++) {
    if (i > k) {
      set.delete(nums[i - k - 1])
    }
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
  return false
};