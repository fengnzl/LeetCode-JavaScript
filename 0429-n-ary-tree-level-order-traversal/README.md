# [429\. N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Breadth-First Search](https://leetcode.com/tag/breadth-first-search/)


Given an n-ary tree, return the _level order_ traversal of its nodes' values.

_Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)._

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```

**Constraints:**

*   The height of the n-ary tree is less than or equal to `1000`
*   The total number of nodes is between [0, 10<sup>4</sup>]


## Solution

Language: **JavaScript**

```javascript
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
​
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []
  const ans = []
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    const arr = []
    for (let i = 0;i < len;i++) {
      const node = stack.shift()
      arr.push(node.val)
      if (node.children) {
        node.children.forEach(child => stack.push(child))
      }
    }
    ans.push(arr)
  }
  return ans
};
```
