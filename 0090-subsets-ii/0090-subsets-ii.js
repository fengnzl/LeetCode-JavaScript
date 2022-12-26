/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ans = []
  nums.sort((a, b) => a - b)
  const set = new Set()
  backtrack(nums, 0, [])
  return ans
  function backtrack(nums, stage, path) {
    if (stage === nums.length) {
      const pathVal = path.join()
      if (!set.has(pathVal)) {
        set.add(pathVal)
        ans.push([...path])
      }
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