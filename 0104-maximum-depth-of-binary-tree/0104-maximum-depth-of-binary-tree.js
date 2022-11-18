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
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0
  let max = 0
  dfs(root, 0)
  return max
  function dfs(root, stage) {
    if (root == null) {
      max = Math.max(stage, max)
      return
    }
    dfs(root.left, stage + 1)
    dfs(root.right, stage + 1)
  }
};