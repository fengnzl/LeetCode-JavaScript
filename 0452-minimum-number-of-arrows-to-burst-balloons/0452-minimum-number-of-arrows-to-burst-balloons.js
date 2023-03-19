/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  // 先从小到大排序
  // 如果 nums[i][0] > nums[i - 1][1] 说明无法用同一根箭来爆破 箭数 + 1
  // 否则 跟新 nums[i][1] 的值
  const len = points.length
  if (len === 1) return 1
  points.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  let ans = 1
  for (let i = 1;i < len;i++) {
    if (points[i][0] > points[i - 1][1]) {
      ans++
    } else {
      points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
  }
  return ans
};