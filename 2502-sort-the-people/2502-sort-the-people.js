/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const n = heights.length
  const indexArr = Array.from({ length: n }, (_, i) => i)
  // 从大到小排序
  indexArr.sort((a, b) => heights[b] - heights[a])
  return indexArr.map((i) => names[i])
};