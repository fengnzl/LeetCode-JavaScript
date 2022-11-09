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
// var preorderTraversal = function(root) {
//   const ans = []
//   dfs(root)
//   return ans
//   function dfs(root) {
//     if(root === null) return
//     ans.push(root.val)
//     dfs(root.left)
//     dfs(root.right)
//   }
// };
// status 为 1 代表一次将要扩展左子树，左子节点入栈
// status 为 2 代表左子树已经扩展完，将要扩展右子树，右子节点入栈
// status 为 3 表示左右子节点均已扩展完毕，出栈
var preorderTraversal = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      ans.push(topNode.node.val)
      topNode.status = 2
      if (topNode.node.left) {
        stack.push(new StatusNode(1, topNode.node.left))
      }
      continue
    }
    if (topNode.status === 2) {
      topNode.status = 3
      if (topNode.node.right) {
        stack.push(new StatusNode(1, topNode.node.right))
      }
      continue
    }
    if(topNode.status === 3) {
      stack.pop()
    }
  }
  return ans
  
  function StatusNode(status, node) {
    this.status = status
    this.node = node
  }
};