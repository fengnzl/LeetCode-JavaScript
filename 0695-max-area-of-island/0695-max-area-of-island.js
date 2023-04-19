/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const h = grid.length
  const w = grid[0].length
  let max = 0
  for(let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      max = Math.max(max, dfs(grid, i, j))
    }
  }
  return max
  function dfs(grid, i, j) {
    if (
      i < 0 ||
      i >= h ||
      j < 0 ||
      j >= w ||
      grid[i][j] === 0
    ) {
      return 0
    }
    // 每次访问置为 0 避免重复访问
    grid[i][j] = 0
    let ans = 1
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    directions.forEach(([offsetI, offsetJ]) => {
      const newI = offsetI + i
      const newJ = offsetJ + j
      ans += dfs(grid, newI, newJ)
    })
    return ans
  }
};