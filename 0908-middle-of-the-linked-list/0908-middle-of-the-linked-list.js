/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let [low, fast] = [head, head]
  while (fast != null && fast.next !== null) {
    low = low.next
    fast = fast.next.next
  }
  return low
};