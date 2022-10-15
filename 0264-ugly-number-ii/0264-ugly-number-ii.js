/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if (n <= 3) return n
  const dp = Array(n + 1)
  dp[1] = 1
  let p2 = p3 = p5 = 1
  for (let i = 2;i <= n;i++) {
    const num2 = dp[p2] * 2
    const num3 = dp[p3] * 3
    const num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)
    if (num2 === dp[i]) p2++
    if (num3 === dp[i]) p3++
    if (num5 === dp[i]) p5++
  }
  return dp[n]
};