/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var postorder = function(root) {
//   const ans = []
//   postOrder(root)
//   return ans
//   function postOrder(root) {
//     if (root == null) return
//     for(let child of root.children) {
//       postOrder(child)
//     }
//     ans.push(root.val)
//   }
// };
var postorder = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      topNode.status = 2
      if (topNode.node.children) {
        for (let i = topNode.node.children.length - 1;i >= 0;i--) {
          stack.push(new StatusNode(1, topNode.node.children[i]))
        }
      }
      continue
    }
    if (topNode.status === 2) {
      ans.push(topNode.node.val)
      stack.pop()
    }
  }
  return ans
};

function StatusNode(status, node) {
  this.status = status
  this.node = node
}