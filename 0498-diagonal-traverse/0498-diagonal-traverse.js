/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length
  const n = mat[0].length
  const ans = []
  let [row, column] = [0, 0]
  // direction 0 表示从下往上 next 为 mat[row - 1][column + 1]， 1 为从上往下 mat[row + 1][column - 1]
  let direction = 0
  while (row < m && column < n) {
    if (!direction) {
      while (row >= 0 && column < n) {
        ans.push(mat[row][column])
        if (row === 0 || column === n - 1) {
          if (column !== n - 1) {
            column++
          } else {
            row++
          }
          break
        } else {
          row--
          column++
        }
      }
    } else {
      while (row < m && column >= 0) {
        ans.push(mat[row][column])
        if (row === m - 1 || column === 0) {
          if (row !== m - 1) {
            row++
          } else {
            column++
          }
          break
        } else {
          row++
          column--
        }
      }
    }
    direction = (direction + 1) % 2
  }
  return ans
};