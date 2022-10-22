/**
 * @param {number[][]} matrix
 * @return {number}
 */
// dfs 超时
// var minFallingPathSum = function(matrix) {
//   const n = matrix.length
//   let min = Infinity
//   for (let i = 0;i < n;i++) {
//     dfs(1, 0, i, matrix[0][i])
//   }
//   return min
//   function dfs(stage, row, col, sum) {
//     if (stage === n) {
//       if (sum < min) min = sum
//       return
//     }
//     const directions = [[1, -1], [1, 0], [1, 1]]
//     for (const [offsetRow, offsetCol] of directions) {
//       const newRow = row + offsetRow
//       const newCol = col + offsetCol
//       if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
//         dfs(stage + 1, newRow, newCol, sum + matrix[newRow][newCol])
//       }
//     }
//   }
// };
var minFallingPathSum = function(matrix) {
  const n = matrix.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  dp[0] = [...matrix[0]]
  for (let i = 1;i < n;i++) {
    for (let j = 0;j < n;j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j]
      } else if (j === n - 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + matrix[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]) + matrix[i][j]
      }
    }
  }
  return Math.min.apply(null, dp[n - 1])
}