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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (root == null) return []
  const result = []
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    let sum = 0
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      sum += node.val
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    result.push(sum / len)
  }
  return result
};