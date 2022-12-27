/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = []
  backtrack(nums, 0, [], new Set())
  return ans
  function backtrack(nums, stage, path, set) {
    if (stage === nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0;i < nums.length;i++) {
      if (!set.has(nums[i])) {
        set.add(nums[i])
        path.push(nums[i])
        backtrack(nums, stage + 1, path, set)
        set.delete(nums[i])
        path.pop()
      }
    }
  }
};