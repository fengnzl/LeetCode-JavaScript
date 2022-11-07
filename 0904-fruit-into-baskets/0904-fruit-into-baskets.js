/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const map = new Map()
  const len = fruits.length
  let [l, ans] = [0, 0]
  for (let r = 0;r < len;r++) {
    map.set(fruits[r], (map.get(fruits[r]) || 0) + 1)
    while (map.size > 2) {
      map.set(fruits[l], map.get(fruits[l]) - 1)
      if (map.get(fruits[l]) === 0) {
        map.delete(fruits[l])
      }
      l++
    }
    ans = Math.max(ans, r - l + 1)
  }
  return ans
};