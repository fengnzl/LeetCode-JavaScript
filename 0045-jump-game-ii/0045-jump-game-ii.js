/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 记录当前可达最远距离和下次可达最远距离
  // 当达到当前可达最远距离，更新跳跃次数和当前可达最远距离
  // 当数组长度为1 时，返回0 无需跳跃
  const len = nums.length
  if (len === 1) return 0
  let curInstance = 0 // 当前可达最远距离
  let nextInstance = 0 // 下次可达最远距离
  let step = 0
  for (let i = 0;i <= curInstance;i++) {
    nextInstance = Math.max(i + nums[i], nextInstance)
    if (i === curInstance) {
      step++
      curInstance = nextInstance
    }
    if (curInstance >= len - 1) {
      break
    }
  }
  return step
};