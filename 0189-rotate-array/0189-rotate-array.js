/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 以[1,2,3,4,5,6,7], k = 3 为例
  // 先整体旋转 [7,6,5,4,3,2,1]
  // 旋转 0 ~ 2 [5,6,7,4,3,2,1]
  // 旋转 3 ～ 最后 [5,6,7,1,2,3,4]
  const n = nums.length
  // 避免出现 k 超出数组的长度
  k = k % n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
  function reverse(nums, start, end) {
    while (start < end) {
      [nums[end], nums[start]] = [nums[start], nums[end]]
      start++
      end--
    }
  }
};