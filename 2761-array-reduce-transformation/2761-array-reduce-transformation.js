/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let accum = init
  for (const val of nums) {
    accum = fn(accum, val)
  }
  return accum
};