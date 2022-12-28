/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ans = []
  backtrack(nums, 0, [], new Set(), new Set())
  return ans
  function backtrack(nums, stage, path, indexSet, arrSet) {
    if (stage === nums.length) {
      const val = path.join()
      if (!arrSet.has(val)) {
        ans.push([...path])
        arrSet.add(val)
      }
      return
    }
    for (let i = 0;i < nums.length;i++) {
      if (!indexSet.has(i)) {
        indexSet.add(i)
        path.push(nums[i])
        backtrack(nums, stage + 1, path, indexSet, arrSet)
        path.pop()
        indexSet.delete(i)
      }
    }
  }
};