/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ans = []
  const map = new Map()
  candidates.forEach(val => map.set(val, (map.get(val) || 0) + 1))
  const uniqueNums = []
  const countArr =[]
  map.forEach((count, num) => {
    uniqueNums.push(num)
    countArr.push(count)
  })
  backtrack(uniqueNums, 0, [], target)
  return ans
  function backtrack(nums, k, path, left) {
    if (left === 0) {
      ans.push([...path])
      return
    }
    if (k === nums.length) return
    for (let count = 0;count <= countArr[k] && count <= Math.floor(left / nums[k]);count++) {
      for (let i = 0;i < count;i++) {
        path.push(nums[k])
      }
      backtrack(nums, k + 1, path, left - nums[k] * count)
      for (let i = 0;i < count;i++) {
        path.pop()
      }
    }
  }
};