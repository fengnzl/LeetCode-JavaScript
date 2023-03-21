/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const n = s.length
  // 记录每个字母最远所在位置
  const charMap = new Map()
  for (let i = 0;i < n;i++) {
    charMap.set(s[i], i)
  }
  // 遍历字符串，当前位置与之前字母可达最远位置相同 说明找到
  const ans = []
  let start = 0
  let max = 0
  for (let i = 0;i < n;i++) {
    max = Math.max(charMap.get(s[i]), max)
    if (max === i) {
      ans.push(i - start + 1)
      start = i + 1
    }
  }
  return ans
};