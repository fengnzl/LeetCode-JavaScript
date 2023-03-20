/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  // 取最大非交叉个数
  // 按右排序
  const len = intervals.length
  if (len === 1) return 0
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1
  let end = intervals[0][1]
  for (let i = 1;i < len;i++) {
    if (intervals[i][0] >= end) {
      count++
      end = intervals[i][1]
    }
  }
  return len -count
};