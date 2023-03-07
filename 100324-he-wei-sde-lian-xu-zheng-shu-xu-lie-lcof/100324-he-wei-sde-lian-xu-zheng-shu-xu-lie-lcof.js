/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  const ans = []
  let p = 1
  let q = 2
  let sum = 3
  while (p < q) {
    if (sum === target) {
      const result = []
      for (let i = p;i <= q;i++) {
        result.push(i)
      }
      ans.push(result)
      sum -= p
      p++
      q++
      sum += q
    } else if (sum < target) {
      q++
      sum += q
    } else {
      sum -= p
      p++
    }
  }
  return ans
};