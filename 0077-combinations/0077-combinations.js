/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  backtrack(n, 1, k, [])
  return result
  function backtrack(n, stage, k, path){
    if (path.length === k) {
      result.push([...path])
      return
    }
    if (stage > n) return
    // not choose
    backtrack(n, stage + 1, k, path)
    
    // choose
    path.push(stage)
    backtrack(n, stage + 1, k, path)
    path.pop()
  }
};