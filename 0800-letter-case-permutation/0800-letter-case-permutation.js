/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const len = s.length
  const charIndex = []
  for (let i = 0;i < len;i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      charIndex.push(i)
    }
  }
  const ans = []
  backTrack(charIndex, 0, s.split(''))
  return ans
  function backTrack(charIndex, stage, path) {
    if (stage === charIndex.length) {
      ans.push(path.join(''))
      return
    }
    // not change
    backTrack(charIndex, stage + 1, path)

    // change
    const index = charIndex[stage]
    if (/[a-z]/.test(s[index])) {
      path[index] = s[index].toUpperCase()
    } else {
      path[index] = s[index].toLowerCase()
    }
    backTrack(charIndex, stage + 1, path)
    path[index] = s[index]
  }
};