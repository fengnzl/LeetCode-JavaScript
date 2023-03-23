/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  // 从后往前遍历  遇到 num[i - 1] > nums[i]
  // 则将 nums[i] 变为 9 nums[i - 1]-- 
  // 我们需要遍历找到 索引之后都变为 9 的 然后修改即可
  const nums = `${n}`.split('').map(v => +v)
  let flag
  for (let i = nums.length - 1;i > 0;i--) {
    if (nums[i - 1] > nums[i]) {
      flag = i
      nums[i - 1]--
    }
  }
  if (flag !== undefined) {
    for (let i = flag;i < nums.length;i++) {
      nums[i] = 9
    }
  }
  return +nums.join('')
};