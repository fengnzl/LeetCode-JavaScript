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
  const stack = [[root]]
  while (stack.length > 0) {
    const curLevel = stack.pop()
    const ret = []
    const nodeArr = []
    curLevel.forEach(node => {
      ret.push(node.val)
      if (node.left) nodeArr.push(node.left)
      if (node.right) nodeArr.push(node.right)
    })
    ret.length && result.push(ret)
    nodeArr.length && stack.push(nodeArr)
  }
  return result
};