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
var postorder = function(root) {
  const ans = []
  postOrder(root)
  return ans
  function postOrder(root) {
    if (root == null) return
    for(let child of root.children) {
      postOrder(child)
    }
    ans.push(root.val)
  }
};