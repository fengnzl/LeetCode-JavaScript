/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  // 当存在多个维度时，我们需要一个一个纬度考虑 否则会顾此失彼
  // 首先考虑身高从大到小排序，如果身高一样，则按照 k 值从小到大排序
  // 然后根据 k 进行插入排序
  people.sort((a, b) => {
    if (b[0] === a[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })
  console.log(people)
  const ans = []
  for (const cur of people) {
    ans.splice(cur[1], 0, cur)
  }
  return ans
};