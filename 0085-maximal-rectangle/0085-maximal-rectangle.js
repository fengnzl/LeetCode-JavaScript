/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  // 相当于 84 题柱状图最大矩形的变种
  const h = matrix.length
  const w = matrix[0].length
  let max = 0
  const heights = Array(w + 2).fill(0)
  for (let i = 0;i < h;i++) {
    for(let j = 0;j < w;j++) {
      if (matrix[i][j] === '1') {
        heights[j + 1] += 1
      } else {
        heights[j + 1] = 0
      }
    }
    max = Math.max(max, getMax(heights, w + 2))
  }
  return max
  
  function getMax(heights, len) {
    let max = 0
    const stack = []
    for (let i = 0;i < len;i++) {
      if (!stack.length) {
        stack.push(i)
        continue
      }
      while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
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
  }
  
};