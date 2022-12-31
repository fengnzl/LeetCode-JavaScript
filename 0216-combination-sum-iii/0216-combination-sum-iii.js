/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ans = []
  backtrack(1, [], k, n)
  return ans
  function backtrack(i, path, count, left) {
    if (path.length === count && left === 0) {
      ans.push([...path])
      return
    }
    if (left < 0 || i > 9 || path.length > count) {
      return
    }
    // not choose
    backtrack(i + 1, path, count, left)
    
    // choose
    path.push(i)
    backtrack(i + 1, path, count, left - i)
    path.pop()
  }
};