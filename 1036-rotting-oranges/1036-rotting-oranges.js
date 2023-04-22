/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  // 记录新鲜橘子的个数
  let freshOrange = 0
  // 记录腐烂橘子的索引
  const h = grid.length
  const w = grid[0].length
  let arr = []
  for (let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      if (grid[i][j] === 2) {
        arr.push([i, j])
      } else if (grid[i][j] === 1) {
        freshOrange++
      }
    }
  }
  // 记录腐烂的分钟数
  let rotCount = 0
  while (arr.length) {
    const copyArr = arr.slice()
    if (freshOrange === 0) return rotCount
    // 一轮感染，腐烂分钟数 +1
    rotCount++
    for (const [i, j] of copyArr) {
      // 四个方向
      const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
      directions.forEach(([offsetI, offsetJ]) => {
        const newI = i + offsetI
        const newJ = j + offsetJ
        // 新鲜的橘子
        if (
          newI >= 0 &&
          newI < h &&
          newJ >= 0 &&
          newJ < w &&
          grid[newI][newJ] === 1
        ) {
          // 将该橘子腐烂，更改状态避免多次感染，并且更新腐烂的个数
          grid[newI][newJ] = 2
          freshOrange--
          // 将感染位置添加到队列，更新队列
          arr.push([newI, newJ])
        }
      })
    }
    arr = arr.slice(copyArr.length)
  }
  console.log(freshOrange)
  return freshOrange === 0 ?  rotCount : -1
};