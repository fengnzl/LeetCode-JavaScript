/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const ans = []
  dfs(root)
  return ans
  function dfs(root) {
    if (root == null) return
    ans.push(root.val)
    for (let i = 0;i < root.children.length;i++) {
      dfs(root.children[i])
    }
  }
};