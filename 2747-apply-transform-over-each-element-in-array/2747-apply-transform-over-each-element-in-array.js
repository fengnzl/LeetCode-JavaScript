/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const ans = []
  arr.forEach((item, i) => ans.push(fn(item, i)))
  return ans
};