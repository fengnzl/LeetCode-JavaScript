/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 暴力方法 双层循环  O(n^2)
  // 使用双指针，每次移动 height 小的一边
  let [left, right, max] = [0, height.length - 1, 0]
  const getCur = (min) => height[min] * (right - left)
  while (left < right) {
    if (height[left] < height[right]) {
      max = Math.max(max, getCur(left))
      left++
    } else {
      max = Math.max(max, getCur(right))
      right--
    }
  }
  return max
};