/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0
  let max = 0
  nums.forEach(val => {
    if (val === 1) {
      count++
    } else {
      if (count > max) max = count
      count = 0
    }
  })
  return count > max ? count : max
};