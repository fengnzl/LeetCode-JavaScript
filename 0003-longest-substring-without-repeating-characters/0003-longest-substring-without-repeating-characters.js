/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0
  let p = 0
  const set = new Set()
  let max = - 1
  for (let i = 0;i < s.length;i++) {
    while (set.has(s[i])) {
      set.delete(s[p])
      p++
    }
    set.add(s[i])
    const val = i - p + 1
    if (val > max) {
      max = val
    }
  }
  return max
};