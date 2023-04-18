/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const [n, m] = [s1.length, s2.length]
  if(n > m) return false
  // 滑动窗口
  const count1 = Array(26).fill(0)
  const count2 = Array(26).fill(0)
  const aCharCode = 'a'.charCodeAt()
  for (let i = 0;i < n;i++) {
    count1[s1[i].charCodeAt() - aCharCode]++
    count2[s2[i].charCodeAt() - aCharCode]++
  }
  if (count2.join() === count1.join()) {
    return true
  }
  for (let i = n;i < m;i++) {
    count2[s2[i].charCodeAt() - aCharCode]++
    count2[s2[i - n].charCodeAt() - aCharCode]--
    if (count1.join() === count2.join()) {
      return true
    }
  }
  return false
};