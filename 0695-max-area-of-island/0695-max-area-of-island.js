/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const h = grid.length
  const w = grid[0].length
  // 记录 grid 中岛上值为 1 的单元格索引值
  const areaIsland = []
  for(let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      if (grid[i][j] === 1) {
        areaIsland.push([i, j])
      }
    }
  }
  // 没有为1、只有一个为1的以及全部为1的
  if (areaIsland.length <= 1 || areaIsland.length === h * w)
    return areaIsland.length
  // 最大岛屿面积
  let max = 0
  areaIsland.forEach(([i, j]) => {
    const val = dfs(grid, i, j)
    if (max < val) max = val
  })
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