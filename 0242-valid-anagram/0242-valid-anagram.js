/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const wordCountObj = {}
  const len = s.length
  for (let i = 0;i < len;i++) {
    wordCountObj[s[i]] = (wordCountObj[s[i]] || 0) + 1
  }
  for (let i = 0;i < len;i++) {
    wordCountObj[t[i]] = (wordCountObj[t[i]] || 0) - 1
    if (wordCountObj[t[i]] < 0) return false
  }
  for (const val of Object.values(wordCountObj)) {
    if (val !== 0) return false
  }
  return true
};