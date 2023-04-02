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
var rob = function(root) {
  if (root == null) return 0
  const money = traverse(root)
  return Math.max(money[0], money[1])
  function traverse(root) {
    if (root == null) return [0, 0]
    const left = traverse(root.left)
    const right = traverse(root.right)
    const money = []
    // 0 表示不选择当前节点，取子节点最大值之和
    money[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 1 表示选择当前节点，不选子节点之值
    money[1] = left[0] + right[0] + root.val
    return money
  }
};