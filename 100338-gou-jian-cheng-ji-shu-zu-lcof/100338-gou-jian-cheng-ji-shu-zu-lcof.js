/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  const n = a.length
  const prevMulti = Array(n).fill(1)
  // 前缀乘积
  for (let i = 1;i < n;i++) {
    prevMulti[i] = prevMulti[i - 1] * a[i - 1]
  }
  // 后缀乘积
  const nextMulti = Array(n).fill(1)
  for (let i = n - 2;i >= 0;i--) {
    nextMulti[i] = nextMulti[i + 1] * a [i + 1]
  }
  return prevMulti.map((val, i) => val * nextMulti[i])
};