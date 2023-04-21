# [116\. 填充每个节点的下一个右侧节点指针](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

## Description

Difficulty: **中等**  

Related Topics: [树](https://leetcode.cn/tag/tree/), [深度优先搜索](https://leetcode.cn/tag/depth-first-search/), [广度优先搜索](https://leetcode.cn/tag/breadth-first-search/), [链表](https://leetcode.cn/tag/linked-list/), [二叉树](https://leetcode.cn/tag/binary-tree/)


给定一个 **完美二叉树 **，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL`。

初始状态下，所有 next 指针都被设置为 `NULL`。

**示例 1：**

![](https://assets.leetcode.com/uploads/2019/02/14/116_sample.png)

```
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
```

**示例 2:**

```
输入：root = []
输出：[]
```

**提示：**

*   树中节点的数量在 [0, 2<sup>12</sup> - 1] 范围内
*   `-1000 <= node.val <= 1000`

**进阶：**

*   你只能使用常量级额外空间。
*   使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) return root
  let depthArr = []
  if (root.left) {
    depthArr.push(root.left, root.right)
  }
  while (depthArr.length) {
    const copy = depthArr.slice()
    const len = copy.length
    for (let i = 0;i < len;i++) {
      copy[i].next = i + 1 === len ? null : copy[i + 1]
      if (copy[i].left) {
        depthArr.push(copy[i].left, copy[i].right)
      }
    }
```
