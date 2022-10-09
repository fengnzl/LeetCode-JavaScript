/**
 * @param {number[]} nums
 * @return {number}
 */
// greedy when total count less than zero reset count to zero 
// reference https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.html#%E8%B4%AA%E5%BF%83%E8%A7%A3%E6%B3%95
var maxSubArray = function(nums) {
  let result = -Infinity
  let count = 0
  for (let i = 0;i < nums.length;i++) {
    count += nums[i]
    result = Math.max(result, count)
    if (count < 0) count = 0
  }
  return result
};