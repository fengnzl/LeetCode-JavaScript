/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = []
  const ansSet = new Set()
  backTrack(0, nums, [])
  return ans
  function backTrack(stage, nums, path) {
    // 如果已经遍历完
    if (stage === nums.length) {
      // 如果存在两个元素及以上且之前没有添加 则添加到数组
      const pathStr = path.join()
      if (path.length >= 2 && !ansSet.has(pathStr)) {
        ansSet.add(pathStr)
        ans.push([...path])
      }
      return
    }
    // 不选择
    backTrack(stage + 1, nums, path)

    // 选择下一个数据
    for (let i = stage;i < nums.length;i++) {
      if (!path.length || nums[i] >= path[path.length - 1]) {
        // 做选择
        path.push(nums[i])
        backTrack(i + 1, nums, path)
        // 撤销选择
        path.pop()
      }
    }
  }
};