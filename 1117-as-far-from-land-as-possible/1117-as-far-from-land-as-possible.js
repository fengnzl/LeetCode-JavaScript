/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  // 记录陆地位置
  // 遍历陆地队列，更新每个海洋到陆地的位置，并更新队列记录
  // 最后记录的位置即为最大距离
  const h = grid.length
  const w = grid[0].length
  let arr = []
  for (let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      if (grid[i][j] === 1) {
        arr.push([i, j])
      }
    }
  }
  // 判断如果全是海洋活着陆地
  if (arr.length === 0 || arr.length === h * w) {
    return -1
  }
  let pos
  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  while (arr.length) {
    const copyArr = arr.slice()
    const n = copyArr.length
    for(const [i, j] of copyArr) {
      // 记录最后更新数值后的位置
      pos = [i, j]
      directions.forEach(([offsetI, offsetJ]) => {
        const newI = offsetI + i
        const newJ = offsetJ + j
        if (
          newI >= 0 &&
          newI < h &&
          newJ >= 0 &&
          newJ < w &&
          grid[newI][newJ] === 0
        ) {
          grid[newI][newJ] = grid[i][j] + 1
          arr.push([newI, newJ])
        }
      })
    }
    arr = arr.slice(n)
  }
  return grid[pos[0]][pos[1]] - 1
};