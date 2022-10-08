/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curIndex = 0 // 当前覆盖的最远距离
  let step = 0 // 当前行走的步数
  let nextIndex = 0 // 下一步覆盖的最远距离
  for (let i = 0;i < nums.length - 1;i++) {
    // 如果倒数第二个台阶刚好覆盖，那么直接加1 即可
    // 更新下一步最远距离
    nextIndex = Math.max(nums[i] + i, nextIndex)
    // 如果当前覆盖最远距离与当前下标相同
    if (i === curIndex) {
      curIndex = nextIndex
      step++
    }
  }
  return step
};