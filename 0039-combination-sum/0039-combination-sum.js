/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ans = []
  backtrack(candidates, target, 0, [])
  return ans
  function backtrack(nums, left, k, path) {
    if (left === 0) {
      ans.push([...path])
      return
    }
    if (k === nums.length) return
    for (let count = 0;count <= Math.floor(left / nums[k]);count++) {
      for (let i = 0;i < count;i++) {
        path.push(nums[k])
      }
      backtrack(nums, left - nums[k] * count, k + 1, path)
      for (let i = 0;i < count;i++) {
        path.pop()
      }
    }
  }
};