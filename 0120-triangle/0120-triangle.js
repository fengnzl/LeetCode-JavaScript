/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//   const n = triangle.length
//   const dp = Array.from({ length: n }, () => Array(n).fill(0))
//   dp[0][0] = triangle[0][0]
//   for (let i = 1;i < n;i++) {
//     for (let j = 0; j <= i;j++) {
//       if (j === 0) {
//         dp[i][j] = dp[i - 1][j] + triangle[i][j]
//       } else if (j === i) {
//         dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
//       } else {
//         dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
//       }
//     }
//   }
//   return Math.min.apply(null, dp[n - 1])
// };

var minimumTotal = function(triangle) {
  const n = triangle.length
  const dp = Array(n).fill(0)
  dp[0] = triangle[0][0]
  for (let i = 1;i < n;i++) {
    for (let j = i;j >= 0;j--) {
      if (j === i) {
        dp[j] = dp[j - 1] + triangle[i][j]
      } else if (j === 0) {
        dp[j] = dp[j] + triangle[i][j]
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j]
      }
    }
  }
  return Math.min(...dp)
}