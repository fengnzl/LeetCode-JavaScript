/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = []
  const set = new Set()
  backtrack(nums, 0, [])
  return ans
  function backtrack(nums, stage, path) {
    if (stage === nums.length) {
      if (path.length >= 2) {
        const pathStr = path.join()
        if (!set.has(pathStr)) {
          set.add(pathStr)
          ans.push([...path])
        }
      }
      return
    }
    // not choose
    backtrack(nums, stage + 1, path)
    
    // choose
    if (path.length === 0 || nums[stage] >= path[path.length - 1]) {
      path.push(nums[stage])
      backtrack(nums, stage + 1, path)
      path.pop()
    }
  }
};