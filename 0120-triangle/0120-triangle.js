/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  dp[0][0] = triangle[0][0]
  for (let i = 1;i < n;i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
  }
  for (let i = 1;i < n;i++) {
    for (let j = 1;j < i;j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
    }
    // 最边上的数据特殊处理
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
  }
  return Math.min.apply(null, dp[n - 1])
};