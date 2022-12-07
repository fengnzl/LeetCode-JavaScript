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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 二叉搜索树中序遍历有序 左中右 -> 从小到大
var rangeSumBST = function(root, low, high) {
  let sum = 0
  let cur = 0
  inOrder(root)
  return sum
  function inOrder(root) {
    if (root == null) return
    inOrder(root.left)
    cur = root.val
    if (cur > high) return
    if (cur >= low) {
      sum += cur
    }
    inOrder(root.right)
  }
};