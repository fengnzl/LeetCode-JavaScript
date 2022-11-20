/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let cur = 0 // 当前海拔高度
  let max = 0 // 最高点海拔高度
  for (const h  of gain) {
    cur += h
    if (cur > max) max = cur
  }
  return max
};