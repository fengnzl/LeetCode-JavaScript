/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const numStack = []
  for (let i = 0;i < tokens.length;i++) {
    let token = tokens[i]
    if (/\d+/.test(token)) {
      numStack.push(token)
      continue
    }
    const num2 = numStack.pop()
    numStack.push(calc(+numStack.pop(), +num2, token))
  }
  return numStack[0]
};

function calc(num1, num2, operator) {
  let val = 0
  switch(operator) {
    case '+':
      val = num1 + num2
      break;
    case '-':
      val = num1 - num2
      break;
    case '*':
      val = num1 * num2
      break;
    default:
      val = Math.trunc((num1/num2))
      break;
  }
  return val
}