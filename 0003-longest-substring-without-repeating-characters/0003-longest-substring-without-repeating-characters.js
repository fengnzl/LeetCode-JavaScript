/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let [i, j] = [0, 0]
  const n = s.length
  const set = new Set()
  let max = 0
  while (i < n) {
    while (set.has(s[i])) {
      set.delete(s[j])
      j++
    }
    set.add(s[i])
    i++
    if (max < i - j) {
      max = i - j
    }
  }
  return max
};