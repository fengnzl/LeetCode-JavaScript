/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const n = heights.length
  if (n === 1) return heights[0]
  // 增加守卫，从而可以使用统一的判断逻辑
  let max = 0
  const stack = [0]
  heights.push(0)
  heights.unshift(0)
  
  for (let i = 0;i < n + 2;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop()
      while (stack.length && heights[stack[stack.length - 1]] === heights[top]) {
        stack.pop()
      }
      const w = i - stack[stack.length - 1] - 1
      max = Math.max(max, w * heights[top])
    }
    stack.push(i)
  }
  return max
};