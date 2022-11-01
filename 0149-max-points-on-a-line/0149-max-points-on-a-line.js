/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const len = points.length
  if (len === 1) return 1
  let ans = 1
  // 根据斜率相等判断三点在一条斜线上
  for (let i= 0;i < len;i++) {
    const x = points[i]
    for (let j = i + 1;j < len;j++) {
      const y = points[j]
      let count = 2;
      for (let k = j + 1;k < len;k++) {
        const p = points[k]
        const s1 = (y[1] - x[1]) * (p[0] - y[0]);
        const s2 = (p[1] - y[1]) * (y[0] - x[0]);
        if (s1 === s2) {
          count++
        }
      }
      ans = Math.max(ans, count)
    }
  }
  return ans
};