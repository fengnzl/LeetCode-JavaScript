# [1026\. Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Binary Tree](https://leetcode.com/tag/binary-tree/)


Given the `root` of a binary tree, find the maximum value `v` for which there exist **different** nodes `a` and `b` where `v = |a.val - b.val|` and `a` is an ancestor of `b`.

A node `a` is an ancestor of `b` if either: any child of `a` is equal to `b` or any child of `a` is an ancestor of `b`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree.jpg)

```
Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree-1.jpg)

```
Input: root = [1,null,2,null,0,3]
Output: 3
```

**Constraints:**

*   The number of nodes in the tree is in the range `[2, 5000]`.
*   0 <= Node.val <= 10<sup>5</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 实质上是求祖先节点的最大、最小值与当前节点差值
// 只要在遍历的时候将最大值、最小值向下传递即可
var maxAncestorDiff = function(root) {
  if (root == null) return 0
  let max = 0
  dfs(root, root.val, root.val)
  return max
  function dfs(node, up, down) {
    if (node == null) return
    max = Math.max(Math.abs(up - node.val), Math.abs(down - node.val), max)
    up = Math.max(up, node.val)
    down = Math.min(down, node.val)
    dfs(node.left, up, down)
    dfs(node.right, up, down)
  }
};
```
