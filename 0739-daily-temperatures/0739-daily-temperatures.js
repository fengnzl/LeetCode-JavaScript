/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  if (n === 1) return [0]
  const ans = Array(n).fill(0)
  const stack = []
  for (let i = 0;i < n;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const left = stack.pop()
      ans[left] = i - left
    }
    stack.push(i)
  }
  return ans
};