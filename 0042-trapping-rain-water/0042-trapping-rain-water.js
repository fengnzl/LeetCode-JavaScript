/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const stack = []
  let sum = 0
  const n = height.length
  for (let i = 0;i < n;i++) {
    if (stack.length === 0) {
      stack.push(i)
      continue
    }
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const top = stack.pop()
      if (!stack.length) break
      const h = Math.min(height[i], height[stack.at(-1)]) - height[top]
      const w = i- stack.at(-1) - 1
      sum += h * w
    }
    stack.push(i) 
  }
  return sum
};