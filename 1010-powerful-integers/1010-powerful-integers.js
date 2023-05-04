/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const set = new Set()
  const getPower = (bound, base) => {
    if (base === 1) return [base]
    let value = 1
    const arr = []
    while (value <= bound) {
      arr.push(value)
      value *= base
    }
    return arr
  }
  const xPower = getPower(bound, x)
  const yPower = getPower(bound, y)
  for (let i = 0;i < xPower.length;i++) {
    for (let j = 0;j < yPower.length;j++) {
      const sum = xPower[i] + yPower[j]
      if (sum <= bound) {
        set.add(sum)
      }
    }
  }
  return [...set]
};