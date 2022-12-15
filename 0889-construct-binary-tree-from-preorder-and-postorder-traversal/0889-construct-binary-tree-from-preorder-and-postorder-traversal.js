/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  return buildTree(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1)
  function buildTree(preorder, i, j, postorder, p, r) {
    if (i > j) return null
    const root = new TreeNode(preorder[i])
    let q = i + 1
    while (q <= j && preorder[q] !== postorder[r - 1]) {
      q++
    }
    const leftTreeSize = q - i - 1
    root.left = buildTree(preorder, i + 1, i + leftTreeSize, postorder, p, p + leftTreeSize - 1)
    root.right = buildTree(preorder, q, j, postorder, p + leftTreeSize, r - 1)
    return root 
  }
};