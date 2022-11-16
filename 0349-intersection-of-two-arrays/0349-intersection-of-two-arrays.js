/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set(nums2)
  return Array.from(new Set(nums1)).filter(val => set.has(val))
};