/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0
  let max = 0
  const stack = [root]
  while(stack.length) {
    max++
    const len = stack.length
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      if (node.children) {
        node.children.forEach(child => stack.push(child))
      }
    }
  }
  return max
};