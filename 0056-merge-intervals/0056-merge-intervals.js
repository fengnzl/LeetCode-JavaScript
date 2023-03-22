/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  let [start, end] = intervals[0]
  for (let i = 1;i < intervals.length;i++) {
    if (end >= intervals[i][0]) {
      end = Math.max(intervals[i][1], end)
    } else {
      result.push([start, end])
      start = intervals[i][0]
      end = intervals[i][1]
    }
  }
  result.push([start, end])
  return result
};