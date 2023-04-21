/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) return root
  let depthArr = []
  if (root.left) {
    depthArr.push(root.left, root.right)
  }
  while (depthArr.length) {
    const copy = depthArr.slice()
    const len = copy.length
    for (let i = 0;i < len;i++) {
      copy[i].next = i + 1 === len ? null : copy[i + 1]
      if (copy[i].left) {
        depthArr.push(copy[i].left, copy[i].right)
      }
    }
    depthArr = depthArr.slice(len)
  }
  return root
};