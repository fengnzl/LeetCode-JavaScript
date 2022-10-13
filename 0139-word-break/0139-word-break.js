/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const n = s.length
  const dp = Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1;i <= n;i++) {
    for (const word of wordDict) {
      const len = word.length
      const start = i - len
      if (start >= 0 && dp[start] && s.slice(start, i) === word) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
};