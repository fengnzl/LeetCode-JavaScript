/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const [n, m] = [s1.length, s2.length]
  const charMap = new Map()
  for (let i = 0;i < n;i++) {
    charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1)
  }
  let j = 0
  while (j < m) {
    if (charMap.has(s2[j])) {
      let q = j
      const charMapCopy = new Map(charMap)
      // 当前 s2 的字符不在 s1 里面
      while (charMapCopy.has(s2[q])) {
        const val = charMapCopy.get(s2[q])
        if (val === 1) {
          charMapCopy.delete(s2[q])
        } else {
          charMapCopy.set(s2[q], val - 1)
        }
        q++
      }
      if (charMapCopy.size === 0 && q - j === n) {
        return true
      }
    }
    j++
  }
  return false
};