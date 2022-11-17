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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root)
  }
  dfs(root, 1)
  return root
  function dfs(root, stage) {
    if (root == null) return
    const left = root.left
    const right = root.right
    if (stage === depth - 1) {
      root.left = new TreeNode(val, left)
      root.right = new TreeNode(val, null, right)
      return
    }
    dfs(left, stage + 1)
    dfs(right, stage + 1)
  }
};