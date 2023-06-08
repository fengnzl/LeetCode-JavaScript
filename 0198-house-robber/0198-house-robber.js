/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  for (let i = 2;i < n;i++) {
    [second, first] = [Math.max(first + nums[i], second), second]
  }
  return second
};