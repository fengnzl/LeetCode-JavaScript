/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]]
  const dp = Array.from({ length: numRows }, (_, index) => Array(index + 1).fill(1) )
  for (let i = 2;i < numRows;i++) {
    for (let j = 1;j < dp[i].length - 1;j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp
};