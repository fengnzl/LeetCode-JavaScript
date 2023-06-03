/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n
  let p = 0
  let q = 1
  for (let i = 2;i <= n;i++) {
    [q, p] = [q + p, q]
  }
  return q
};