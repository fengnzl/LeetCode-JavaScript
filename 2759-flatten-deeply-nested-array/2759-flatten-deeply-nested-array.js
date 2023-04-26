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
    ans = ans.reduce((prev, cur) =>  {
      if (Array.isArray(cur)) {
        hasNested = true
        prev.push(...cur)
      } else {
        prev.push(cur)
      }
      return prev
    }, []) 
    if (!hasNested) return ans
    n--
  }
  return ans
};