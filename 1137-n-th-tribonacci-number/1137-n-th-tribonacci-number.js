/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  let [p, q, r] = [0, 1, 1]
  for (let i = 3;i <= n;i++) {
    [p, q, r] = [q, r, q + p + r]
  }
  return r
};