/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  const n = values.length
  if (n === 1) return values[1] + values[0] - 1
  // 观光分数 values[i] + values[j] - (j - i) = values[i] + i + values[j] - j
  //  即遍历时更新 values[i] + i，获取之前最大的 观光点，同时与当前 values[j] - j 之和获取总的最大值
  let result = 0
  let iMax = values[0]
  for (let i = 1;i < n;i++) {
    if (iMax + values[i] -i > result) result = iMax + values[i] -i
    if (values[i] + i > iMax) iMax = values[i] + i
  }
  return result
};