/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode()
  dummyHead.next = head
  let p = dummyHead
  while (p.next != null) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return dummyHead.next
};