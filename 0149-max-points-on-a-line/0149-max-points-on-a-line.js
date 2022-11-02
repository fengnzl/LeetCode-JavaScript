/**
 * @param {number[][]} points
 * @return {number}
 */
// var maxPoints = function(points) {
//   const len = points.length
//   if (len === 1) return 1
//   let ans = 1
//   // 根据斜率相等判断三点在一条斜线上
//   for (let i= 0;i < len;i++) {
//     const x = points[i]
//     for (let j = i + 1;j < len;j++) {
//       const y = points[j]
//       let count = 2;
//       for (let k = j + 1;k < len;k++) {
//         const p = points[k]
//         const s1 = (y[1] - x[1]) * (p[0] - y[0]);
//         const s2 = (p[1] - y[1]) * (y[0] - x[0]);
//         if (s1 === s2) {
//           count++
//         }
//       }
//       ans = Math.max(ans, count)
//     }
//   }
//   return ans
// };

var maxPoints = function(points) {
  const len = points.length
  if (len <= 2) return len
  let ans = 1
  for (let i = 0;i < len;i++) {
    const map = new Map()
    let max = 0
    const [x1, y1] = points[i]
    for (let j = i + 1;j < len;j++) {
      const [x2, y2] = points[j]
      const a = y2 - y1
      const b = x2 - x1
      //获取最大公约数
      const k = gcd(a, b)
      // 标识
      const name = `${b/k}@${a/k}`
      map.set(name, (map.get(name) || 0) + 1)
      max = Math.max(max, map.get(name))
    }
    ans = Math.max(ans, max + 1)
  }
  return ans
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}