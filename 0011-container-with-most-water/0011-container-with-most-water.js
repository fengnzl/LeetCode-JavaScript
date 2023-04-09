/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 暴力方法 双层循环  O(n^2)
  // 使用双指针，每次移动 height 小的一边
  let [left, right, max] = [0, height.length - 1, 0]
  while (left < right) {
    let cur
    if (height[left] < height[right]) {
      cur = height[left] * (right - left)
      left++
    } else {
      cur = height[right] * (right - left)
      right--
    }
    if (max < cur) {
      max = cur
    }
  }
  return max
};