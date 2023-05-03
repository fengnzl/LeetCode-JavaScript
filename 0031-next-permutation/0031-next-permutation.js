/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 尽量对靠后的位置进行交换
  // 交换之后，交换位置之后的要按照从小到大排列
  // 首先从后向前遍历 查找第一个相邻升序 (i, j) 满足 arr[i] >= arr[j]，那么 [j,end） 为递减序列
  // 从后向前 找到第一个满足 arr[i] < arr[k], 交换 arr[i] 和 arr[k] 
  // 将 [j,end) 按照从小到大排序即位下一个排列
  // 如果不存在下一个排列，则直接进行交换排序即可
  const n = nums.length
  let i = n - 2
  let j = n - 1
  let m = n - 1
  while (nums[i] >= nums[j] && i >= 0) {
    i--
    j--
  }
  // 如果存在下一个排列
  if (i >= 0) {
    while (nums[i] >= nums[m]) {
      m--
    }
    [nums[i], nums[m]] = [nums[m], nums[i]]
  }
  let k = n - 1
  while (j < k) {
    [nums[j], nums[k]] = [nums[k], nums[j]]
    j++
    k--
  }
};