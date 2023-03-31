/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const h = dungeon.length
  const w = dungeon[0].length
  const dp = Array.from({ length: h + 1 }, () => Array(w + 1).fill(Infinity))
  // 想要到达最后一个房间至少一滴血
  dp[h][w - 1] = dp[h - 1][w] = 1
  for (let i = h - 1;i >= 0;i--) {
    for (let j = w - 1;j >= 0;j--) {
      dp[i][j] = Math.max(Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j], 1)
    }
  }
  return dp[0][0]
};