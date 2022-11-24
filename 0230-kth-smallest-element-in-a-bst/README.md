# [230\. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Binary Search Tree](https://leetcode.com/tag/binary-search-tree/), [Binary Tree](https://leetcode.com/tag/binary-tree/)


Given the `root` of a binary search tree, and an integer `k`, return _the_ k<sup>th</sup> _smallest value (**1-indexed**) of all the values of the nodes in the tree_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)

```
Input: root = [3,1,4,null,2], k = 1
Output: 1
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

**Constraints:**

*   The number of nodes in the tree is `n`.
*   1 <= k <= n <= 10<sup>4</sup>
*   0 <= Node.val <= 10<sup>4</sup>

**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?


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
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树  中序遍历有序 左 -> 中 -> 右 从小到大
var kthSmallest = function(root, k) {
  let count = 0
  const stack = [new StatusNode(1, root)]
  while (stack.length) {
    const topNode = stack[stack.length - 1]
    if (topNode.status === 1) {
      topNode.status = 2
      if (topNode.node.left) {
        stack.push(new StatusNode(1, topNode.node.left))
      }
      continue
    }
    if (topNode.status === 2) {
      count++
      if (count === k) return topNode.node.val
      topNode.status = 3
      if (topNode.node.right) {
        stack.push(new StatusNode(1, topNode.node.right))
      }
      continue
    }
    if (topNode.status === 3) {
      stack.pop()
    }
  }
};
​
function StatusNode(status, node) {
  this.status = status
  this.node = node
}
```
