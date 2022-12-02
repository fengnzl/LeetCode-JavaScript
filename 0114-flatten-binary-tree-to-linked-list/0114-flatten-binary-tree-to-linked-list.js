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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const dummyHead = new TreeNode()
  let tail = dummyHead
  preOrder(root)
  function preOrder(root) {
    if (root == null) return null
    const left = root.left
    const right = root.right
    tail.right = root
    tail = root
    root.left = null
    preOrder(left)
    preOrder(right)
  }
  
};