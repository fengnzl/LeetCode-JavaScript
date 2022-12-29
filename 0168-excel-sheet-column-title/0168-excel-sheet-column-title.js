/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let ans = ''
  while (columnNumber > 0) {
    columnNumber -= 1
    const curNum = columnNumber % 26
    const cur = String.fromCharCode(65 + curNum)
    ans = cur + ans
    columnNumber = Math.floor(columnNumber / 26)
  }
  return ans
};