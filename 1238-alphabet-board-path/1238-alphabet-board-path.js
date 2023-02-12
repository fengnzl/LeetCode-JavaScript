/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
  const obj = {}
  for (let i = 0;i < board.length;i++) {
    const str = board[i]
    for (let j = 0;j < str.length;j++) {
      obj[str[j]] = [i, j]
    }
  }
  let ans = ''
  let cur = [0, 0]
  for (let i = 0;i < target.length;i++) {
    const [first, second] = obj[target[i]]
    const [cur1, cur2] = cur
    const rowMinus = first - cur1
    const isNotFirstAndTargetZ = target[i] === 'z' && cur2 !== 0
    let left = 0
    if (rowMinus > 0) {
      if (isNotFirstAndTargetZ) {
        left = 1
        ans += 'D'.repeat(rowMinus - 1)
      } else {
        ans += 'D'.repeat(rowMinus)
      }
    } else if (rowMinus < 0) {
      ans += 'U'.repeat(-rowMinus)
    }
    const columnMinus = second - cur2
    if (columnMinus > 0) {
      ans += 'R'.repeat(columnMinus)
    } else if (columnMinus < 0) {
      ans += 'L'.repeat(-columnMinus)
    }
    if (left) {
      ans += 'D'
    }
    ans += '!'
    cur = [first, second]
  }
  return ans
};