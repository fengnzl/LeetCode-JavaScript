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
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树  中序遍历有序 左 -> 中 -> 右 从小到大
var kthSmallest = function(root, k) {
  let count = 0
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      topNode.status = 2
      if (topNode.node.left) {
        stack.push(new StatusNode(1, topNode.node.left))
      }
      continue
    }
    if (topNode.status === 2) {
      count++
      if (count === k) return topNode.node.val
      topNode.status = 3
      if (topNode.node.right) {
        stack.push(new StatusNode(1, topNode.node.right))
      }
      continue
    }
    if (topNode.status === 3) {
      stack.pop()
    }
  }
};

function StatusNode(status, node) {
  this.status = status
  this.node = node
}