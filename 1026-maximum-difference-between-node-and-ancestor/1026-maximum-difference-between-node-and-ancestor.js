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
// 实质上是求祖先节点的最大、最小值与当前节点差值
// 只要在遍历的时候将最大值、最小值向下传递即可
var maxAncestorDiff = function(root) {
  if (root == null) return 0
  let max = 0
  dfs(root, root.val, root.val)
  return max
  function dfs(node, up, down) {
    if (node == null) return
    max = Math.max(Math.abs(up - node.val), Math.abs(down - node.val), max)
    up = Math.max(up, node.val)
    down = Math.min(down, node.val)
    dfs(node.left, up, down)
    dfs(node.right, up, down)
  }
};