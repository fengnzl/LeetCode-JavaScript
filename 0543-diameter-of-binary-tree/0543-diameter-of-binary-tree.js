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
var diameterOfBinaryTree = function(root) {
  let max = 0
  dfs(root)
  return max
  function dfs(root) {
    if (root == null) return 0
    const leftDepth = dfs(root.left)
    const rightDepth = dfs(root.right)
    max = Math.max(leftDepth + rightDepth, max)
    return Math.max(leftDepth, rightDepth) + 1
  }
};