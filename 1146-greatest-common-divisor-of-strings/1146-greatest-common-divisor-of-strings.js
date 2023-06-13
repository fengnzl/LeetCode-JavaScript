/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 === str2) return str2
  const len1 = str1.length
  const len2 = str2.length
  const len = Math.min(len1, len2)
  let ans = ''
  let prevAns = ''
  for (let i = 0;i < len;i++) {
    ans += str1[i]
    const curLen = i + 1
    if (len1 % curLen !== 0 || len2 % curLen !== 0) {
      continue
    }
    const repeatNum1 = len1 / curLen
    const repeatNum2 = len2 / curLen
    if (ans.repeat(repeatNum1) === str1 && ans.repeat(repeatNum2) === str2) {
      prevAns = ans
    }
  }
  return prevAns
};