/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rowMap = Array.from({ length: 9 }, () => new Set())
  const colMap = Array.from({ length: 9 }, () => new Set())
  const thirdMap = Array.from({ length: 3, }, () => Array.from({ length: 3 }, () => new Set()))
  const emptyPos = []
  for (let i = 0;i < 9;i++) {
    for (let j = 0;j < 9;j++) {
      if (board[i][j] === '.') {
        emptyPos.push([i, j])
      } else {
        const num = Number(board[i][j])
        rowMap[i].add(num)
        colMap[j].add(num)
        thirdMap[Math.floor(i / 3)][Math.floor(j / 3)].add(num)
      }
    }
  }
  let find = false
  const backtrack = (stage, board) => {
    if (stage === emptyPos.length || find) {
      find = true
      return
    }
    const [row, col] = emptyPos[stage]
    const [p, q] = [Math.floor(row / 3), Math.floor(col / 3)]
    for (let i = 1;i <= 9;i++) {
      if (!rowMap[row].has(i) && !colMap[col].has(i) && !thirdMap[p][q].has(i)) {
        board[row][col] = `${i}`
        rowMap[row].add(i)
        colMap[col].add(i)
        thirdMap[p][q].add(i)
        backtrack(stage + 1, board)
        if (find) return
        board[row][col] = '.'
        rowMap[row].delete(i)
        colMap[col].delete(i)
        thirdMap[p][q].delete(i)
      }
    }
  }
  backtrack(0, board)
};