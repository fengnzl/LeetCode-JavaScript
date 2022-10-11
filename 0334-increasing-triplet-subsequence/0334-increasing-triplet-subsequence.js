/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // 本质是最长上升子序列 数目为 3 的情况
  // https://leetcode.cn/problems/increasing-triplet-subsequence/solutions/1205866/gong-shui-san-xie-zui-chang-shang-sheng-xa08h/
  
  // 这里使用 贪心
  // first = nums[0] second = Infinity
  // 循环当 third > second  说明有三个顺序满足 返回为 true
  // 当first < third < second  更新 second = third
  // 当 first > third, 则将first 更新为 third，这样 second 会在 first 前面，由于second 还是老first相对顺序保持不变 所以继续上述操作老 first 还是满足要求
  const n = nums.length
  if (n < 3) return false
  let first = nums[0]
  let second = Infinity
  for (let i = 1;i < n;i++) {
    if (nums[i] > second) return true
    if (nums[i] > first) second = nums[i]
    if (nums[i] < first) first = nums[i]
  }
  return false
};