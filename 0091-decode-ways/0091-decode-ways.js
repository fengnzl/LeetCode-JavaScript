/**
 * @param {string} s
 * @return {number}
 */
// dfs 会超时
var numDecodings = function(s) {
  const n = s.length
  // 0 < s[i] < 10 则 可以单独称为一个字符 dp[i] = dp[i - 1]
  // 如果 10 <= s[i - 1]s[i] < 27  说明 i 与 i- 1 可以一起称为一个字符， dp[i] = dp[i - 2]
  // 为了避免 i - 2 越界，因此我们增加前置守卫
  s = ' ' + s
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1;i <= n;i++) {
    const a = s[i] - '0'
    const b = (s[i - 1] - '0') * 10 + a
    if (a > 0 && a < 10) dp[i] = dp[i - 1]
    if (b > 9 && b < 27) dp[i] += dp[i - 2]
  }
  return dp[n]
};