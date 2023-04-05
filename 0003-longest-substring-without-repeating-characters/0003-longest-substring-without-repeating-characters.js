/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0
  let i = 0
  const set = new Set()
  for (let j = 0;j < s.length;j++) {
    while (set.has(s[j])) {
      set.delete(s[i])
      i++
    }
    set.add(s[j])
    if (max < j - i + 1) {
      max = j - i + 1
    }
  }
  return max
};