/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let best = 100000000
  // 类似求三数之和
  nums.sort((a, b) => a - b)
  const n = nums.length
  for (let i = 0;i < n;i++) {
    // 保证和上一次枚举的元素不想等
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // 双指针枚举
    let b = i + 1
    let c = n - 1
    while (b < c) {
      const sum = nums[i] + nums[b] + nums[c]
      if (sum === target) {
        return target
      }
      // 更新最接近的数据
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum
      }
      if (sum > target) {
        let j = c - 1
        while (b < j && nums[j] === nums[c]) {
          j--
        }
        c = j
      } else {
        let m = b + 1
        while (m < c && nums[m] === nums[b]) {
          m++
        }
        b = m
      }
    }
  }
  return best
};