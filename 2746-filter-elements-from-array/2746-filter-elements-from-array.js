/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const ans = []
  arr.forEach((item, i) => {
    const val = fn(item, i)
    if (val) {
      ans.push(item)
    }
  })
  return ans
};