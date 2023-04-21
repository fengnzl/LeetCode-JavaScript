/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  // 获取所有为0 的点，并将 1位置设置为 -1 表示未被访问的 1
  const h = mat.length
  const w = mat[0].length
  const arr = []
  for (let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      if (mat[i][j] === 0) {
        arr.push([i, j])
      } else {
        mat[i][j] = -1
      }
    }
  }
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  while (arr.length) {
    const [i, j] = arr.shift()
    directions.forEach(([offsetI, offsetJ]) => {
      const newI = offsetI + i
      const newJ = offsetJ + j
      if (
        newI >= 0 &&
        newI < h &&
        newJ >= 0 &&
        newJ < w &&
        mat[newI][newJ] === -1
      ) {
        // 未被访问的 1 就是临近访问的数值 + 1
        mat[newI][newJ] = mat[i][j] + 1
        arr.push([newI, newJ])
      }
    })
  }
  return mat
};