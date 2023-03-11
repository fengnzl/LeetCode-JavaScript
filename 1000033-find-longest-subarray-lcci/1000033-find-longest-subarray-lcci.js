/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function(array) {
  // 当前位置字母总和
  let charCount = 0
  // 最长子数组长度
  let maxLen = 0
  // 保存差值对应的初始索引 index
  const map = new Map()
  // 空前缀的前缀和为0 索引为-1
  map.set(0, -1)
  //  最长子数组的开头 index 考虑空前缀
  let start = -1
  for (let i = 0;i < array.length;i++) {
    if (/[0-9]/.test(array[i])) {
      charCount++
    } else {
      charCount--
    }
    if (!map.has(charCount)) {
      map.set(charCount, i)
    } else {
      const diffStart = map.get(charCount)
      if (i - diffStart > maxLen) {
        start = diffStart + 1
        maxLen = i - diffStart
      }
    }
  }
  if (maxLen === 0) return []
  return array.slice(start, start + maxLen)
};