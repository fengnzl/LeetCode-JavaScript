/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length
  // 单个字母 也是回文子串
  if (n === 1) return s
  // dp[i][j] 表示 i～ j 是一个回文子串
  const dp = Array.from({ length: n }, () => Array(n).fill(false))
  // dp[i][i] 表示单个字母都是回文子串
  for (let i = 0;i < n;i++) {
    dp[i][i] = true
  }
  // s[i] !== s[j] 则 i..j 不是回文子串
  // s[i] === s[j] i < j, 如果 d[i + 1][j - 1] 为 true，表明是回文子串
  // len = j - i + 1, j = len + i - 1
  // 单个字母是回文子串 此时 len 为 1
  let start = 0
  let max = 1
  for (let len = 2;len <= n;len++) {
    for (let i = 0;i < n;i++) {
      const j = len + i - 1
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j] && j - i + 1 > max) {
        start = i
        max = j - i + 1
      }
    }
  }
  return s.slice(start, max + start)
};