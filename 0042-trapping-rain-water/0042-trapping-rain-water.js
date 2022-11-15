/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length
  if (n <= 1) return 0
  let sum = 0
  const stack = []
  for (let i = 0;i < n;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (!stack.length) {
        break
      }
      const h = Math.min(height[i], height[stack[stack.length - 1]]) - height[top]
      const w = i - stack[stack.length - 1] - 1
      sum += h * w
    }
    stack.push(i)
  }
  return sum
};