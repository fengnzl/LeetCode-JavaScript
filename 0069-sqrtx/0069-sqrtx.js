/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  const n = x >> 1
  let [low, high] = [1, n]
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    const midPow2 = mid * mid
    if (midPow2 === x) {
      return mid
    } else if (midPow2 < x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid
      } else {
        low = mid + 1
      }
    } else {
      high = mid - 1
    }
  }
};