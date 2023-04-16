/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b))
  return nums.map(val => val * val)
};