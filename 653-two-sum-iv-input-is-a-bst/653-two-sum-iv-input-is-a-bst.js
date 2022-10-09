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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  // 二叉搜索树中序遍历是有序的，然后可以通过 双指针计算两数之和
  const arr = []
  dfs(root, arr)
  let [i, j] = [0, arr.length - 1]
  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum === k) return true
    if (sum > k) {
      j--
    } else {
      i++
    }
  }
  return false
  function dfs(root, arr) {
    if (root == null) return
    if (root.left) dfs(root.left, arr)
    arr.push(root.val)
    if (root.right) dfs(root.right, arr)
  }
};