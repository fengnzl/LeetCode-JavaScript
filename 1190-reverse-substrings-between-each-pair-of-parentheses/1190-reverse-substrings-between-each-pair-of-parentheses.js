/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = []
  const len = s.length
  for (let i = 0;i < len;i++) {
    if (s[i] !== ')') {
      stack.push(s[i])
      continue
    }
    const temp = []
    while (stack.length && stack[stack.length - 1] !== '(') {
      temp.push(stack.pop())
    }
    stack.pop()
    stack.push(...temp)
  }
  return stack.join('')
};