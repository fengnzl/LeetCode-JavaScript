/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
  
  function buildTree(inorder, i, j, postorder, p, r) {
    if (i > j) return null
    const root = new TreeNode(postorder[r])
    let q = i
    while (q <= j && inorder[q] !== postorder[r]) {
      q++
    }
    const leftSize = q - i - 1
    root.left = buildTree(inorder, i, i + leftSize, postorder, p, p + leftSize)
    root.right = buildTree(inorder, q + 1, j, postorder, p + leftSize + 1, r - 1)
    return root
  }
};