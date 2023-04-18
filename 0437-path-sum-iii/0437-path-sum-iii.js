/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  // 使用前缀和 当前节点反推根节点
  // 当前路径和 curSum
  // curSum += root.val
  // curSum - target 找到当前路径和起点，起点的 sum + target = curSum, 因此两点位置路径和为 target
  // res += map.get(curSum - target) || 0
  // 更新当前节点前缀和的个数
  // map.set(curSum, (map.get(curSum) || 0) + 1)
  const map = new Map()
  // 针对空二叉树 其前缀和为 0
  map.set(0, 1)
  return dfs(root, map, targetSum, 0)
  function dfs(root, map, targetSum, curSum) {
    if (root == null) return 0
    let res = 0
    curSum += root.val
    res += map.get(curSum - targetSum) || 0
    map.set(curSum, (map.get(curSum) || 0) + 1)
    res += dfs(root.left, map, targetSum, curSum)
    res += dfs(root.right, map, targetSum, curSum)
    // 保证单向
    map.set(curSum, map.get(curSum) - 1)
    return res
  }
};