/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return []
  const arr = Array.from({ length: rowsCount }, () => Array(colsCount))
  let i = 0
  // 每次循环遍历需要 row 需要修正的偏移
  let offset = 1
  let j = 0
  let raw = 0
  while (j < colsCount) {
    while (i >= 0 && i < rowsCount) {
      arr[i][j] = this[raw++]
      i += offset
    }
    // 一次遍历取反方向 同时修正遍历 i 的位置
    offset = -offset
    i += offset
    j++
  }
  return arr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */