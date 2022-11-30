/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = null
  record(root, p, q)
  return node
  function record(root, p, q) {
    if (root == null) return 0
    const leftContains = record(root.left, p, q)
    if (node) return 2
    const rightContains = record(root.right, p, q)
    if (node) return 2
    // 当前节点为p 或 q
    let curContains = 0
    if (root == p || root == q) {
      curContains = 1
    }
    if (curContains === 1 && (leftContains === 1 || rightContains === 1)) {
      node = root
    }
    if (leftContains === 1 && rightContains === 1 && curContains === 0) {
      node = root
    }
    return curContains + leftContains + rightContains
  }
};