/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let p = 0
  let q = 1
  for (let i = 2;i <= n;i++) {
    [p, q] = [q, p + q]
  }
  return q
};