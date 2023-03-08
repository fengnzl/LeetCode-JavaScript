/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  // 仅含一个元素 也是摆动序列
  if (nums.length <= 1) return nums.length
  // 两个不等元素也是摆动序列，为了统一逻辑 初始摆动序列值为1
  let result = 1
  // 先前差值
  let prevDiff = 0
  // 当前差值
  let curDiff = 0
  for (let i = 0;i < nums.length - 1;i++) {
    curDiff = nums[i + 1] - nums[i]
    // 出现峰值
    if((prevDiff <= 0 && curDiff > 0) || (curDiff < 0 && prevDiff >= 0)) {
      result++
      // 只有摆动变化时 更新 prevDiff
      prevDiff = curDiff
    }
  }
  return result
};