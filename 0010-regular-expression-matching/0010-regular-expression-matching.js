/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // dp[i][j] 表示 s[i] 前的字符与 p[j] 前的字符匹配
  // p[j] 不为特殊字符时，s[i] === p[j] 且 dp[i-1][j-1] 匹配 则 dp[i][j] 匹配
  // 当 p[j] 为 . 时，只要 dp[i - 1][j - 1] 匹配 则 dp[i][j] 匹配
  // 当 p[j] 为 * 时，则与p[j - 1] 一起使用
  // * 匹配 0 个，dp[i][j] = dp[i][j - 2]
  // * 匹配 1 个，dp[i][j] = dp[i - 1][j - 2] && (s[i] === p[j - 1] || p[j - 1] === '.')
  // * 匹配 2 个，dp[i][j] = dp[i - 2][j - 2] && ((s[i] === p[j - 1] && s[i - 1] === p[j - 1]) || p[j - 1] === '.')
  // 以次类推 得到 dp[i][j] = dp[i][j - 2] || (dp[i - 1][j - 2] && s[i] 匹配 p[j - 1]) || (dp[i - 2][j - 2] && s[i-1:i] 匹配 p[j - 1]) 
  // 将 i = i - 1带入可得
  // dp[i - 1][j] = dp[i - 1][j - 2]
  //   || (dp[i - 2][j - 2] && s[i - 1] 匹配 p[j - 1]
  //   || (dp[i - 3][j - 2] && s[i - 2:i -1] 匹配 p[j - 1])
  // 两个相减可知  dp[i][j] 与 dp[i - 1][j] 整体相差 s[i]匹配 p[j - 1]
  // dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && s[i] 匹配 p[j - 1])
  const m = s.length
  const n = p.length
  // 前置守卫
  s = ' ' + s
  p = ' ' + p
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false))
  // 默认首位是匹配的
  dp[0][0] = true
  for (let i = 0;i <= m;i++) {
    for (let j = 1;j <= n;j++) {
      // 下一个字母为 '*' 不能单独使用
      if (j + 1 <= n && p[j + 1] === '*') {
        continue
      }
      if(i - 1 >= 0 && p[j] !== '*') {
        // 符合一二两种情况
        dp[i][j] = dp[i - 1][j - 1] && (s[i] === p[j] || p[j] === '.')
      } else if(p[j] === '*') {
        dp[i][j] = (j - 2 >= 0 && dp[i][j - 2]) || (i - 1 >= 0 && dp[i - 1][j] && (s[i] === p[j - 1] || p[j - 1] === '.'))
      }
    }
  }
  return dp[m][n]
};