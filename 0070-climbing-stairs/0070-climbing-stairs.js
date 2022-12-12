/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let p = 1
  let q = 2
  for (let i = 3;i <= n;i++) {
    [p, q] = [q, p + q]
  }
  return q
};