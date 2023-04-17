/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const n = s.length
  if (n === 1) return s
  let i = 0
  let ans = ''
  while (i < n) {
    let j = i
    while (s[j] !== ' ' && j < n) {
      j++
    }
    ans += reverse(s, i, j - 1) + ' '
    i = j + 1
  }
  return ans.slice(0, -1)

  function reverse(s, start, end) {
    let ans = ''
    while (end >= start) {
      ans += s[end]
      end--
    }
    return ans
  }
};