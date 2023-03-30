/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const h = obstacleGrid.length
  const w = obstacleGrid[0].length
  const dp = Array.from({ length: h }, () => Array(w).fill(0))
  for (let i = 0;i < h;i++) {
    if (!obstacleGrid[i][0]) {
      dp[i][0] = 1
    } else {
      break
    }
  }
  for (let i = 0;i < w;i++) {
    if (!obstacleGrid[0][i]) {
      dp[0][i] = 1
    } else {
      break
    }
  }
  for (let i = 1;i < h;i++) {
    for (let j = 1;j < w;j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[h - 1][w - 1]
};