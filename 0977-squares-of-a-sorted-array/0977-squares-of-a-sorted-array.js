/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const n = nums.length
  const result = Array(n)
  let [i, j, k] = [0, n - 1, n - 1]
  while (i <= j) {
    const val1 = nums[i] * nums[i]
    const val2 = nums[j] * nums[j]
    if (val1 > val2) {
      result[k--] = val1
      i++
    } else {
      result[k--] = val2
      j--
    }
  }
  return result
};