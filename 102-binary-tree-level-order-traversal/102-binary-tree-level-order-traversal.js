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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []
  const result = []
  const stack = [root]
  while (stack.length > 0) {
    const len = stack.length
    result.push([])
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      result[result.length - 1].push(node.val)
      if(node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }
  return result
};