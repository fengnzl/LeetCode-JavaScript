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
  if (root == null)return []
  const ans = []
  dfs(root, [], 0, targetSum)
  return ans
  function dfs(root, path, pathSum, targetSum) {
    path.push(root.val)
    // 叶子结点判断
    if (root.left === null && root.right === null && pathSum + root.val === targetSum) {
      ans.push([...path])
      path.pop()
      return
    }
    // 递归遍历左右子节点
    root.left && dfs(root.left, path, pathSum + root.val, targetSum)
    root.right && dfs(root.right, path, pathSum + root.val, targetSum)
    // 取消当前选择
    path.pop()
  }
};