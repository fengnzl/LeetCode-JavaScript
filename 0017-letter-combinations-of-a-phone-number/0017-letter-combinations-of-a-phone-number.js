/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ans = []
  dfs(0, '')
  return ans
  function dfs(stage, cur) {
    if (stage === digits.length) {
      ans.push(cur)
      return
    }
    const str = obj[digits[stage]]
    for (let i = 0;i < str.length;i++) {
      dfs(stage + 1, cur + str[i])
    }
  }
};