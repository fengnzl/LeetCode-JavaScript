/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const total = rows * cols
  const ans = Array(total)
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 顺时针四个方向 右-> 下->左-> 上
  // x, y 为当前位置，count 为数量，dr 为方向最初为右
  let [x, y, count, dr] = [rStart, cStart, 1, 0]
  // 左右上下边界
  let [left, right, top, bottom] = [cStart - 1, cStart + 1, rStart - 1, rStart + 1]
  while (count <= total) {
    // 如果 x,y 在矩阵内
    if (x >= 0 && x < rows && y >= 0 && y < cols) {
      ans[count - 1] = [x, y]
      count++
    }
    // 到达右边界
    if (dr === 0 && y === right) {
      dr++
      right++
    } else if (dr === 1 && x === bottom) {
       // 到达下边界
      dr++
      bottom++
    } else if (dr === 2 && y === left) {
      // 到达左边界
      dr++
      left--
    } else if (dr === 3 && x === top) {
      // 到达上边界
      dr = 0
      top--
    }
    x += directions[dr][0]
    y += directions[dr][1]
  }
  return ans
};