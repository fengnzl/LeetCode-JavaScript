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
  let curDepth = 0
  const stack = [[root]]
  while (stack.length > 0) {
    const curNodeArr = stack.pop()
    curDepth++
    if (curDepth + 1 === depth) {
      console.log(curNodeArr)
      curNodeArr.forEach(node => {
        const tempLeft = node.left
        const leftNode = new TreeNode(val, tempLeft)
        node.left = leftNode
        const tempRight = node.right
        const rightNode = new TreeNode(val, null, tempRight)
        node.right = rightNode
      })
      break
    }
    const nodeArr = []
    curNodeArr.forEach(node => {
      if (node.left) nodeArr.push(node.left)
      if (node.right) nodeArr.push(node.right)
    })
    nodeArr.length && stack.push(nodeArr)
  }
  return root
};