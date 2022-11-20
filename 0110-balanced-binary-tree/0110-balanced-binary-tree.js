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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let balance = true
  getHeight(root)
  return balance
  function getHeight(root) {
    if (root == null || !balance) return 0
    const left = getHeight(root.left)
    const right = getHeight(root.right)
    if (Math.abs(left - right) > 1) {
      balance = false
    }
    return Math.max(left, right) + 1
  }
};