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
var zigzagLevelOrder = function(root) {
  if (root == null) return []
  const stack = [root]
  const result = []
  let rightToLeft = true
  while (stack.length) {
    const len = stack.length
    const arr = []
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      arr.push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    if (!rightToLeft) arr.reverse()
    result.push(arr)
    rightToLeft = !rightToLeft
  }
  return result
};