/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr
  let ans = arr
  let hasNested = false
  while (n > 0) {
    hasNested = false
    if (ans.some(item => Array.isArray(item))) {
      hasNested = true
      ans = [].concat(...ans)
    }
    if (!hasNested) return ans
    n--
  }
  return ans
};