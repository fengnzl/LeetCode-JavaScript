/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let max = 0
  const set = new Set(nums)
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let cur = num
      let count = 1
      while (set.has(cur + 1)) {
        cur++
        count++
      }
      max = Math.max(max, count)
    }
  }
  return max
};