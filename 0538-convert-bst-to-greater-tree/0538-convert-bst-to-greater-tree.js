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
 * @return {TreeNode}
 */
// 中序遍历 右中左 
var convertBST = function(root) {
  if (root == null) return root
  const stack = [new StatusNode(1, root)]
  let sum = 0
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      topNode.status = 2
      if (topNode.node.right) {
        stack.push(new StatusNode(1, topNode.node.right))
      }
      continue
    }
    if (topNode.status === 2) {
      topNode.status = 3
      sum += topNode.node.val
      topNode.node.val = sum
      if (topNode.node.left) {
        stack.push(new StatusNode(1, topNode.node.left))
      }
      continue
    }
    if (topNode.status === 3) {
      stack.pop()
    }
  }
  return root
};

function StatusNode(status, node) {
  this.status = status
  this.node = node
}