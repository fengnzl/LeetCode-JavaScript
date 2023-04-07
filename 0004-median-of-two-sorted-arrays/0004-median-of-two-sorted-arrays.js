/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 如果排序后在获取中位数，或者 两个数组的索引对比判断，时间复杂度都是 O(m + n)
  // 如果是 O(log(m + n)) 则说明使用 二分查找方法 logm * logn = log(m + n)
  // nums1[k/2 - 1] <= num2[k/2 - 1] 说明 比 nums1[k / 2 - 1] 小的 最多只有 k - 2 个小于 k，也就是说 nums1 的前 k / 2 - 1都可以舍弃，反之亦然
  // 最后 k === 1 时，取 nums1 和 nums2 首位最小值即可
  const m = nums1.length
  const n = nums2.length
  // 确保奇数时 获取的是中位数
  const mid = (m + n + 1) >> 1
  // 首先
  const left = getNumK(nums1, nums2, 0, 0, mid, m, n)
  // 如果和是奇数，则直接返回 left
  if (((m + n) & 1) === 1) {
    return left
  } else {
    const right = getNumK(nums1, nums2, 0, 0, mid + 1, m, n)
    return (left + right) / 2
  }

  function getNumK(nums1, nums2, start1, start2, k, m, n) {
    // 如果开始位置已经到了数组的最后一位，则取另一个数组的第 start + k - 1 位即可
    if (start1 === m) return nums2[start2 + k - 1]
    if (start2 === n) return nums1[start1 + k - 1]
    if (k === 1) return Math.min(nums1[start1], nums2[start2])
    const i = start1 + Math.min(m, k >> 1) - 1
    const j = start2 + Math.min(n, k >> 1) - 1
    if (nums1[i] <= nums2[j]) {
      return getNumK(nums1, nums2, i + 1, start2, k - (i - start1 + 1), m, n)
    } else {
      return getNumK(nums1, nums2, start1, j + 1, k - (j - start2 + 1), m, n)
    }
  }
};