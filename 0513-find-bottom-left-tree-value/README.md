# [513\. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)

## Description

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Breadth-First Search](https://leetcode.com/tag/breadth-first-search/), [Binary Tree](https://leetcode.com/tag/binary-tree/)


Given the `root` of a binary tree, return the leftmost value in the last row of the tree.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg)

```
Input: root = [2,1,3]
Output: 1
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg)

```
Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7
```

**Constraints:**

*   The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
*   -2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1


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
var findBottomLeftValue = function(root) {
  let result
  const stack = [root]
  while (stack.length) {
  const node = stack.shift()
    result = node.val
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return result
};
```
