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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(root == null) return false
  let isFind = false
  dfs(root)
  return isFind
  function dfs(root, sum = 0) {
    if (isFind) return
    const total = sum + root.val
    if (root.left == null && root.right == null && total === targetSum) {
      isFind = true
      return
    }
    if (root.left) dfs(root.left, total)
    if (root.right) dfs(root.right, total)
  }
};