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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (root == null) return []
  const ans = []
  const path = []
  dfs(root, path)
  return ans
  function dfs(root, path, sum = 0) {
    path.push(root.val)
    if (root.left == null && root.right == null && sum + root.val === targetSum) {
      ans.push([...path])
      path.pop()
      return
    }
    if (root.left) dfs(root.left, path, sum + root.val)
    if (root.right) dfs(root.right, path, sum + root.val)
    path.pop()
  }
};