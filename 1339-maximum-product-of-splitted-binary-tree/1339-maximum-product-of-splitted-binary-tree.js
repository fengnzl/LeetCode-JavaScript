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
 * @return {number}
 */
var maxProduct = function(root) {
  // 首先获取节点总和
  const sum = getSum(root)
  let max = 0
  const MOD = Math.pow(10, 9) + 7
  dfs(root)
  return max % MOD
  function dfs(root) {
    if (root == null) return 0
    const leftSum = dfs(root.left)
    const rightSum = dfs(root.right)
    max = Math.max(leftSum * (sum - leftSum), rightSum * (sum - rightSum), max)
    return root.val + leftSum + rightSum
  }
};

function getSum(root) {
  if (root == null) return 0
  let sum = 0
  const arr = [root]
  while (arr.length) {
    const node = arr.shift()
    sum += node.val
    if (node.left) arr.push(node.left)
    if (node.right) arr.push(node.right)
  }
  return sum
}