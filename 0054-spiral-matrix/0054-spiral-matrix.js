/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const n = matrix.length
  const m = matrix[0].length
  let [left, right, top, bottom] = [0, m - 1, 0, n - 1]
  const result = Array(m * n)
  let i = 0
  while (left <= right && top <= bottom) {
    // 从左至右
    for (let column = left;column <= right;column++) {
      result[i] = matrix[top][column]
      i++
    }
    // 从上往下
    for (let row = top + 1;row <= bottom;row++) {
      result[i] = matrix[row][right]
      i++
    }
    if (left < right && top < bottom) {
      // 从右往左
      for (let column = right - 1;column >= left;column--) {
        result[i] = matrix[bottom][column]
        i++
      }
      // 从下往上
      for (let row = bottom - 1;row > top;row--) {
        result[i] = matrix[row][left]
        i++
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return result
};