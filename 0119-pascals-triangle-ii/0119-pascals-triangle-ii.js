/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex < 2) return Array(rowIndex + 1).fill(1)
  let prevArr = [1, 1]
  let curArray = [1]
  for (let i = 2;i <= rowIndex;i++) {
    let j = 1
    for (;j < i;j++) {
      curArray[j] = prevArr[j - 1] + prevArr[j]
    }
    curArray[j] = 1
    prevArr = [...curArray]
  }
  return curArray
};