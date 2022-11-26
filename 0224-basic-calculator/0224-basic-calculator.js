/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const optsMap = {
    '-': 1,
    '+': 1,
    '/': 2,
    '*': 2,
    '%': 2,
  }
  // s = s.replace(/\s/g, '')
  // 防止第一个数位负数，所以首位添加一个0
  const nums = [0]
  const opts = []
  let prevOpt
  for (let i = 0;i < s.length;i++) {
    if(s[i] === ' ') {
      continue
    }
    if (s[i] === '(') {
      prevOpt = '('
      opts.push('(')
      continue
    } else if (s[i] === ')') {
      prevOpt = ')'
      while (opts.length) {
        if (opts.at(-1) !== '(') {
          calc(nums, opts)
        } else {
          opts.pop()
          break
        }
      }
      continue
    }
    if (/[0-9]/.test(s[i])) {
      let num = 0
      let j = i
      while (j < s.length && /[0-9]/.test(s[j])) {
        num = +s[j] + num * 10
        j++
      }
      nums.push(num)
      i = j - 1
      prevOpt = null
      continue
    } else {
      // "1-(     -2)"  "(-10)"
      if (i > 0 && prevOpt === '(' ) {
        nums.push(0)
      }
      while (opts.length && opts.at(-1) !== ')' && optsMap[opts.at(-1)] >= optsMap[s[i]]) {
        calc(nums, opts)
      }
      prevOpt = s[i]
      opts.push(s[i])
    }
  }
  while (opts.length) calc(nums, opts);
  return nums.at(-1)

  function calc(nums, opts) {
    if (nums.length < 2 || !opts.length) return
    const b = nums.pop()
    const a = nums.pop()
    const opt = opts.pop()
    let value
    if (opt === '+') value = a + b
    if (opt === '-') value = a - b
    if (opt === '*') value = a * b
    if (opt === '/') value = a / b
    if (opt === '%') value = a % b
    nums.push(value)
  }
};