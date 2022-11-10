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
// var inorderTraversal = function(root) {
//   const result = []
//   dfs(root)
//   return result
//   function dfs(root) {
//     if (root == null) return
//     dfs(root.left)
//     result.push(root.val)
//     dfs(root.right)
//   }
// };

// status 为1表示将要扩展左子树，左子节点入栈
// status 为2表示左子树扩展完毕，将要扩展右子树，右子节点入栈
// status 为3表示右子树扩展完毕，出栈
var inorderTraversal = function(root)  {
  if (root == null) return []
  const ans = []
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    const { node, status } = topNode
    if (status === 1) {
      topNode.status = 2
      if (node.left) {
        stack.push(new StatusNode(1, node.left))
      }
    }
    if (status === 2) {
      topNode.status = 3
      ans.push(node.val)
      if (node.right) {
        stack.push(new StatusNode(1, node.right))
      }
    }
    if (status === 3) {
      stack.pop()
    }
  }
  return ans
}
function StatusNode (status, node) {
  this.status = status
  this.node = node
}