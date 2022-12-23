/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  backtrack(nums, 0, [])
  return result
  function backtrack(nums, stage, path) {
    if (stage === nums.length) {
      result.push([...path])
      return
    }
    // not choose
    backtrack(nums, stage + 1, path)
    
    // choose
    path.push(nums[stage])
    backtrack(nums, stage + 1, path)
    path.pop()
  }
};