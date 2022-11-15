/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    const arr = []
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      arr.push(node.val)
      if (node.children) {
        node.children.forEach(child => stack.push(child))
      }
    }
    ans.push(arr)
  }
  return ans
};