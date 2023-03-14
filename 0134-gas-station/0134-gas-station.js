/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // 暴力解法  双层循环，内存循环遍历当前索引触发，邮箱是否可以到下一站，
  // 获取最后能否返回初始位置 及是否存在剩余油量
  for (let i = 0;i < gas.length;i++) {
    let index = (i + 1) % gas.length
    // 记录剩余油量
    let rest = gas[i] - cost[i]
    while (rest > 0 && index !== i) { // 如果未回到起点 而 rest 为 0 则表明没有唯一解
      rest += gas[index] - cost[index]
      index = (index + 1) % gas.length
    }
    // 如果回到起点 刚好油量用完或者还剩油量 则找到起点
    if (index === i && rest >= 0) return i
  }
  return -1
};