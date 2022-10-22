/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const sLen = s.length
  const tLen = t.length
  const need = {}
  // 获取 t 中不同字符的个数
  for (let i = 0;i < tLen;i++) {
    need[t[i]] = (need[t[i]] || 0) + 1
  }
  // t 中总共不同字符数
  let needTypeCount = Object.keys(need).length
  let min = ''
  let left = 0
  let right = 0
  while (right < sLen) {
    const word = s[right]
    if (need[word] !== undefined) {
      need[word]--
      if (need[word] === 0) needTypeCount--
    }
    // 当不同字符数为 0  说明 t 包含在 [left, right] 之间，缩小left，right 之间的范围 获取最小值
    while (needTypeCount === 0) {
      const newStr = s.slice(left, right + 1)
      if (!min || min.length > newStr.length) min = newStr
      const leftWord = s[left]
      if (need[leftWord] !== undefined) {
        need[leftWord]++
        if (need[leftWord] === 1) needTypeCount++
      }
      left++
    }
    right++
  }
  return min
};