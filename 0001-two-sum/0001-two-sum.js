/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indexObj = {}
  console.log('a')
  for (let i = 0;i < nums.length;i++) {
    const left = target - nums[i]
    if (indexObj[left] !== undefined) {
      return [indexObj[left], i]
    } else {
      indexObj[nums[i]] = i
    }
  }
};