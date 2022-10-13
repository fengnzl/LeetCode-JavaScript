/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const n = nums.length
  let j = 0
  let i = 0
  while (i < n) {
    if (nums[i] !== val) {
      nums[j++] = nums[i++]
    } else {
      i++
    }
  }
  return j
};