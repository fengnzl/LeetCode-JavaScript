/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  // 创建两个 dp 数组 分别记录 i 位置 连续乘积为负数和正数的值，同时更新最大连续正数值
  const n = nums.length
  const positive = Array(n).fill(0)
  const negative = Array(n).fill(0)
  if (nums[0] < 0) {
    negative[0] = 1
  } else if (nums[0] > 0) {
    positive[0] = 1
  }
  let result = positive[0]
  for (let i = 1;i < n;i++) {
    if (nums[i] < 0) {
      // 当前为负，正 X 负 = 负，因此 negative[i] = positive[i - 1] + 1
      // 如果 negative[i - 1] 值大于0 说明是负数，则 positive[i] = negative[i - 1] + 1 否则为0
      negative[i] = positive[i - 1] + 1
      positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
    } else if (nums[i] > 0) {
      // 当前为正，正 X 正 = 正 positive[i] = positive[i - 1] + 1
      // 只有 negative[i] > 0 时 说明之前乘积为负，此时可以加1
      positive[i] = positive[i - 1] + 1
      negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
    } else {
      //nums[i] === 0
      positive[i] = negative[i] = 0
    }
    if (positive[i] > result) result = positive[i]
  }
  return result
};