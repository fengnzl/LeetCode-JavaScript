/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
  // 由于target 互不相同
  // 因此最长相同子序列相当于寻找下标的最长递增子序列
  const n = target.length
  // 获取 target 数组下标和数值的对应关系
  const map = new Map()
  for (let i = 0;i < n;i++) {
    map.set(target[i], i)
  }
  // 获取 arr 中包含 target 数组元素的下标
  const list = []
  for (const val of arr) {
    if (map.has(val)) {
      list.push(map.get(val))
    }
  }
  // 获取 list 数组的最长递增子序列 贪心 + 二分
  const len = list.length
  const res = []
  let count = 0
  for (let i = 0;i < len;i++) {
    // 如果是第一位 或者 list[i] 大于结果数组的最后一位
    if (count === 0 || list[i] > res[count - 1]) {
      res[count] = list[i]
      count++
    } else {
      // 二分查找第一个大于 list[i] 的位置 并进行更新
      const j = getPos(res, list[i])
      if (j === -1) continue
      res[j] = list[i]
    }
  }
  return n - count
};
function getPos(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      // 如果 mid 为 0 或者 mid 是一个大于 target 的则找到
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