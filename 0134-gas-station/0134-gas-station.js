/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {
//   // 暴力解法  双层循环，内存循环遍历当前索引触发，邮箱是否可以到下一站，
//   // 获取最后能否返回初始位置 及是否存在剩余油量
//   for (let i = 0;i < gas.length;i++) {
//     let index = (i + 1) % gas.length
//     // 记录剩余油量
//     let rest = gas[i] - cost[i]
//     while (rest > 0 && index !== i) { // 如果未回到起点 而 rest 为 0 则表明没有唯一解
//       rest += gas[index] - cost[index]
//       index = (index + 1) % gas.length
//     }
//     // 如果回到起点 刚好油量用完或者还剩油量 则找到起点
//     if (index === i && rest >= 0) return i
//   }
//   return -1
// };
var canCompleteCircuit = function(gas, cost) {
  // 计算当前位置到 i 位置的剩余油量总数，
  // 如果油量总数小于 0 说明在 位置～i 之间都不可作为出发点
  // 此时触发位置更新为 i + 1, 剩余总油量重制为0
  // 循环的同时计算总油量， 如果总油量小于 0  说明不存在解
  let curSum = 0
  let start = 0
  let totalSum = 0
  for (let i = 0;i < gas.length;i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if (curSum < 0) {
      start = i + 1
      curSum = 0
    }
  }
  return totalSum < 0 ? -1 : start
}