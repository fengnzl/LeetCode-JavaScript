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
// var postorderTraversal = function(root) {
//   const ans = []
//   dfs(root)
//   return ans
//   function dfs(root) {
//     if (root == null) return
//     dfs(root.left)
//     dfs(root.right)
//     ans.push(root.val)
//   }
// };
// status 1 扩展左子树
// status 2 左子树扩展完毕 扩展右子树
// status 3 左右子树都扩展完毕
var postorderTraversal = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    const { node, status } = topNode
    if (status === 1) {
      topNode.status = 2
      node.left && stack.push(new StatusNode(1, node.left))
    }
    if (status === 2) {
      topNode.status = 3
      node.right && stack.push(new StatusNode(1, node.right))
    }
    if (status === 3) {
      ans.push(node.val)
      stack.pop()
    }
  }
  return ans
}
function StatusNode(status, node) {
  this.status = status
  this.node = node
}