/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((prev, cur) => prev + cur)
  // 说明不能整除
  if (sum % k !== 0) return false
  nums.sort((a, b) => a - b)
  // 拆分子数组的和
  const target = sum / k
  // 如果最大的元素 大于目标和 则说明无法拆分
  const n = nums.length
  if (nums[n - 1] > target) {
    return false
  }
  // 创建桶 计算每个子数组的和
  const bucket = Array(k).fill(0)
  return backtrack(nums, bucket, 0, k, target)
  function backtrack(nums, bucket, index, k, target) {
    // 结束条件 已经处理完所有的数据
    if (index === nums.length) {
      // 判断桶每个数据是否等于 target
      if (bucket.some(val => val !== target)) {
        return false
      }
      return true
    }
    // nums[index] 做选择
    for (let i = 0;i < k;i++) {
      // 放入球后超过 target 则放到下一个桶
      if (bucket[i] + nums[index] > target) continue
      // 如果当前桶和之前桶元素和相同，则跳过当前选择，因为选择后得到的结果与之前相同
      if (i > 0 && bucket[i] === bucket[i - 1]) continue
      // 做选择，放入 i 号桶
      bucket[i] += nums[index]
      // 处理下一个球
      if(backtrack(nums, bucket, index + 1, k, target)) return true
      // 撤销选择
      bucket[i] -= nums[index]
    }
    return false
  }
};