/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 将当前 node 元素与下一个 node 值调换，删除下一个 node
  const nextNode = node.next
  // 调换值,并将当前 node.next 指向 node.next.next
  node.val = nextNode.val
  node.next = nextNode.next
  nextNode.next = null
};