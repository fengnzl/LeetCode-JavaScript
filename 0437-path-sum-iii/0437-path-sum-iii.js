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
  if (root == null) return 0
  let count = 0
  dfs(root)
  return count
  // 双重 dfs 时间复杂度 O(n^2)
  // 先 dfs 遍历每个节点，然后dfs 遍历以该节点为开始的路径和
  function dfs(root) {
    if (root == null) return
    dfs2(root, root.val)
    dfs(root.left)
    dfs(root.right)
  }
  function dfs2(root, val) {
    if (val === targetSum) count++
    root.left && dfs2(root.left, val + root.left.val)
    root.right && dfs2(root.right, val + root.right.val)
  }
};