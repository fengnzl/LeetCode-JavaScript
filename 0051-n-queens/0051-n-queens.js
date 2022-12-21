/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []
  const board = Array.from({ length: n }, () => Array(n).fill('.'))
  dfs(board, 0, n)
  return result
  function dfs(board, row, n) {
    if (row === n) {
      result.push(Array.from({ length: n }, (v, i) => board[i].join('')))
      return
    }
    for (let col = 0;col < n;col++) {
      if (isOk(board, row, col, n)) {
        board[row][col] = 'Q'
        dfs(board, row + 1, n)
        board[row][col] = '.'
      }
    }
  }
  function isOk(board, i, j, n) {
    // 列是否有冲突
    for(let row = 0; row < i;row++) {
      if (board[row][j] === 'Q') {
        return false
      }
    }
    // 左上对角线
    let row = i - 1
    let col = j - 1
    while (row >= 0 && col >= 0) {
      if (board[row][col] === 'Q') {
        return false
      }
      row--
      col--
    }
    // 右上对角线
    row = i - 1
    col = j + 1
    while(row >= 0 && col < n) {
      if (board[row][col] === 'Q') {
        return false
      }
      row--
      col++
    }
    return true
  }
};