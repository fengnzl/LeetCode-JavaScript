/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const arr1 = []
  const arr2 = []
  getNodeSequence(root1, arr1)
  getNodeSequence(root2, arr2)
  console.log(arr1, arr2)
  return arr1.join() === arr2.join()
};

function getNodeSequence(root, arr) {
  if (root == null) return
  inOrder(root) 
  return
  function inOrder(root) {
    if (root == null) return
    inOrder(root.left)
    if (root.left == null && root.right == null) {
      arr.push(root.val)
      return
    }
    inOrder(root.right)
  }
}