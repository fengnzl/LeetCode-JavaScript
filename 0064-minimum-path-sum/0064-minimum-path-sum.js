/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const h = grid.length
  const w = grid[0].length
  const dp = Array.from({ length: h }, () => Array(w).fill(0))
  dp[0][0] = grid[0][0]
  for (let i = 1;i < h;i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1;j < w;j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  for (let i = 1;i < h;i++) {
    for (let j = 1;j < w;j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[h - 1][w - 1]
};