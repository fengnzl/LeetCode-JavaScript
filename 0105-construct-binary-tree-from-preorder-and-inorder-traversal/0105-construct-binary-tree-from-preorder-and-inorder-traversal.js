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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 中序遍历的第一个为 root节点
// 后续遍历 以中序遍历获取的 root 节点划分 左边为 左子树 右边为右子树
var buildTree = function(preorder, inorder) {
  function buildTreeRecursion(preorder, i, j, inorder, p, r) {
    if (i > j) return null
    const root = new TreeNode(preorder[i])
    let q = p
    while (q <= r && preorder[i] !== inorder[q]) {
      q++
    }
    const leftSize = q - p
    root.left = buildTreeRecursion(preorder, i + 1, i + leftSize, inorder, p, q - 1)
    root.right = buildTreeRecursion(preorder, i + leftSize + 1, j, inorder, q + 1, r)
    return root
  }
  return buildTreeRecursion(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};