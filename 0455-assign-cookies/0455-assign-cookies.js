/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let j = s.length - 1
  let ans = 0
  for (let i = g.length - 1;i >= 0;i--) {
    if (j >= 0 && s[j] >= g[i]) {
      ans++
      j--
    }
  }
  return ans
};