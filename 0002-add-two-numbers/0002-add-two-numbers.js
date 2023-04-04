/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  let next = 0
  let p1 = l1
  let p2 = l2
  const dummyHead = new ListNode()
  let p = dummyHead
  while (p1 !== null || p2 !== null) {
    let sum = next
    if (p1 !== null) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2 !== null) {
      sum += p2.val
      p2= p2.next
    }
    p.next = new ListNode(sum % 10)
    p = p.next
    next = sum / 10 | 0
  }
  if (next > 0) {
    p.next = new ListNode(next)
  }
  return dummyHead.next
};