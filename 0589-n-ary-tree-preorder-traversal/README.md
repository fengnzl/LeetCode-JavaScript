# [589\. N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)

## Description

Difficulty: **Easy**  

Related Topics: [Stack](https://leetcode.com/tag/stack/), [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/)


Given the `root` of an n-ary tree, return _the preorder traversal of its nodes' values_.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

**Constraints:**

*   The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
*   0 <= Node.val <= 10<sup>4</sup>
*   The height of the n-ary tree is less than or equal to `1000`.

**Follow up:** Recursive solution is trivial, could you do it iteratively?


## Solution

Language: **JavaScript**

```javascript
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
​
/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var preorder = function(root) {
//   const ans = []
//   dfs(root)
//   return ans
//   function dfs(root) {
//     if (root == null) return
//     ans.push(root.val)
//     for (let i = 0;i < root.children.length;i++) {
//       dfs(root.children[i])
//     }
//   }
// };
var preorder = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      ans.push(topNode.node.val)
      topNode.status = 2
      if (topNode.node.children) {
        for (let i = topNode.node.children.length - 1;i >= 0;i--) {
          stack.push(new StatusNode(1, topNode.node.children[i]))
        }
      }
      continue
    }
    if (topNode.status === 2) {
      stack.pop()
    }
  }
  return ans
}
​
function StatusNode(status, node) {
  this.status = status
  this.node = node
}
  while (stack.length) {
```
