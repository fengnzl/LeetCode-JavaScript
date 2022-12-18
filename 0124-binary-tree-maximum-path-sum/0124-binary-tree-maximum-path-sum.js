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
var maxPathSum = function(root) {
  let max = -1001
  dfs(root)
  return max
  function dfs(root) {
    if (root == null) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    let cur = root.val
    if (left > 0) cur += left
    if (right > 0) cur += right
    max = Math.max(max, cur)
    return Math.max(root.val, root.val + left, root.val + right)
  }
};