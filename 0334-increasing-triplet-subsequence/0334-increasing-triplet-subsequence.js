/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // 本质是计算最长递增子序列
  // 只要计算递增子序列的长度大于 3 我们就可以返回true 否则返回false
  const len = nums.length
  if (len < 3) return false
  const ans = []
  let count = 0
  for (let i = 0;i < nums.length;i++) {
    // 如果是第一位 或者当前位大于结果数组的最后一位 直接添加到结果数组
    if (count === 0 || nums[i] > ans[count - 1]) {
      ans[count++] = nums[i]
      if (count >= 3) return true
    } else {
      // 二分查找 第一位大于小于 nums[i] 的数据并进行更新
      const j = getPos(ans, nums[i])
      ans[j] = nums[i]
    }
  }
  return false
};

function getPos(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      }
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}