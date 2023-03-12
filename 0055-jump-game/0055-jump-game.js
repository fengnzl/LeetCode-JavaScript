/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 对每次可达位置，计算当前位置加上数值可达的长度与记录的最大长度对比
  // 每次更新最大可达长度，判断是否可以到最后一位
  // let max = 0
  // let i = 0
  // const len = nums.length
  // for (;i < len && i <= max;i++) {
  //   max = Math.max(max, i + nums[i])
  //   if (max >= len ) return true
  // }
  // return i === len
  // 如果只有个一个数 一定可达
  const len = nums.length
  if (len === 1) return true
  let max = 0
  for (let i = 0;i <= max; i++) {
    max = Math.max(max, i + nums[i])
    if (max >= len - 1) return true
  }
  return false
};