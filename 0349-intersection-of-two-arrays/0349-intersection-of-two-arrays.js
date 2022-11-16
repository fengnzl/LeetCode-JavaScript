/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   const set = new Set(nums2)
//   return Array.from(new Set(nums1)).filter(val => set.has(val))
// };

var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const n = nums1.length
  const m = nums2.length
  const ans = []
  let [i, j] = [0, 0]
  while (i < n && j < m) {
    const num1 = nums1[i]
    const num2 = nums2[j]
    if (num1 === num2) {
      // 确保添加数字的唯一性
      if (!ans.length || ans[ans.length - 1] !== num1) {
        ans.push(num1)
      }
      i++
      j++
    } else if (num1 < num2) {
      i++
    } else {
      j++
    }
  }
  return ans
};