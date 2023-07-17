/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let maxLen = 0
  if (len1 > len2) {
    num2 = num2.padStart(len1, '0')
    maxLen = len1 - 1
  } else {
    num1 = num1.padStart(len2, '0')
    maxLen = len2 - 1
  }
  let ans = ''
  let next = 0
  console.log(num2, num1)
  while (maxLen >= 0) {
    const sum = Number(num1[maxLen]) + Number(num2[maxLen]) + next
    ans = `${sum % 10}${ans}`
    next = sum >= 10 ? 1 : 0
    maxLen--
  }
  if (next) {
    ans = `${next}${ans}`
  }
  return ans
};