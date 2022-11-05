/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true
  const midVal = num >> 1
  let [low, high] = [1, midVal]
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    const midPow2 = mid * mid
    if (midPow2 === num) {
      return true
    } else if (midPow2 < num) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
};