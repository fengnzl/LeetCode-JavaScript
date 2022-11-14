# [637\. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/)

## Description

Difficulty: **Easy**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Breadth-First Search](https://leetcode.com/tag/breadth-first-search/), [Binary Tree](https://leetcode.com/tag/binary-tree/)

Given the `root` of a binary tree, return _the average value of the nodes on each level in the form of an array_. Answers within 10<sup>-5</sup> of the actual answer will be accepted.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg)

```
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (root == null) return []
  const result = []
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    let sum = 0
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      sum += node.val
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    result.push(sum / len)
  }
  return result
};
      if (node.right) stack.push(node.right)
```
