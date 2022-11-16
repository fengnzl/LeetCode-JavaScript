/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const len = nums2.length
  const stack = []
  const nextObj = {}
  for (let i = 0;i < len;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop()
      nextObj[nums2[index]] = nums2[i]
    }
    stack.push(i)
  }
  return nums1.map(val => nextObj[val] || -1)
};