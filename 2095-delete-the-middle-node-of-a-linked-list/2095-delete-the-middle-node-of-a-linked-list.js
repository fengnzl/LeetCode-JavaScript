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
var deleteMiddle = function(head) {
  if (head.next == null) return null
  const middle = getMiddleNode(head)
  let p = head
  while (p.next != null) {
    if (p.next === middle) {
      p.next = p.next.next
      break
    } else {
      p = p.next
    }
  }
  return head
};
function getMiddleNode(head) {
  let low = head
  let fast = head
  while (fast != null && fast.next != null) {
    low = low.next
    fast = fast.next.next
  }
  return low
}