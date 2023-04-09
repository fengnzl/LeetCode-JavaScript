/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 暴力方法 双层循环  O(n^2)
  // 使用双指针，每次移动 height 小的一边
  const n = height.length
  let [left, right] = [0, n - 1]
  const getCur = (left, right) => Math.min(height[left], height[right]) * (right - left)
  let max = getCur(left, right)
  while (left < right) {
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
    const cur = getCur(left, right)
    if (max < cur) {
      max = cur
    }
  }
  return max
};