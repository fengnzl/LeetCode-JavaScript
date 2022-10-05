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
    const node = new TreeNode(val, root)
    return node
  }
  dfs(root, 1)
  return root
  function dfs(root, cur) {
    if (root == null) return
    if (cur === depth - 1) {
      const left = new TreeNode(val, root.left)
      const right = new TreeNode(val, null, root.right)
      root.left = left
      root.right = right
    } else {
      dfs(root.left, cur + 1)
      dfs(root.right, cur + 1)
    }
  }
};