/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0))
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1]
  let num = 1
  while (left <= right && top <= bottom) {
    // 从左到右
    for (let column = left;column <= right;column++) {
      matrix[top][column] = num
      num++
    }
    // 从上到下
    for (let row = top + 1;row <= bottom;row++) {
      matrix[row][right] = num
      num++
    }
    if (left < right && top < bottom) {
      // 从右到左
      for (let column = right - 1;column >= left;column--) {
        matrix[bottom][column] = num
        num++
      }
      // 从下到上
      for (let row = bottom - 1;row > top;row--) {
        matrix[row][left] = num
        num++
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return matrix
};