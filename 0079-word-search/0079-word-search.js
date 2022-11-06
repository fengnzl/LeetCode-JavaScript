/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const h = board.length
  const w = board[0].length
  const visited = Array.from({ length: h }, () => Array(w).fill(false))
  let found = false
  for (let i = 0;i < h;i++) {
    for (let j = 0;j < w;j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, 0, word)
        if (found) return true
      }
    }
  }
  return false
  function dfs(i, j, stage, word) {
    if (found || board[i][j] !== word[stage]) return
    visited[i][j] = true
    if (stage === word.length - 1) {
      found = true
      return
    }
    const arr = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (const [offsetI, offsetJ] of arr) {
      const newI = i + offsetI
      const newJ = j + offsetJ
      if (newI >=0 && newI < h && newJ >= 0 && newJ < w && !visited[newI][newJ]) {
        dfs(newI, newJ, stage + 1, word)
      }
    }
    visited[i][j] = false
  }
};