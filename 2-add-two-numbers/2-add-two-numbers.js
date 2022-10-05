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
  const dummyList = new ListNode()
  let dummyHead = dummyList
  let p1 = l1
  let p2 = l2
  let remainder = 0
  while (p1 !== null || p2 !== null) {
    let sum = remainder
    if (p1 != null) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2 != null) {
      sum += p2.val
      p2 = p2.next
    }
    const val = sum % 10
    dummyHead.next = new ListNode(val)
    dummyHead = dummyHead.next
    remainder = sum / 10 >> 0
  }
  if (remainder > 0){
    dummyHead.next = new ListNode(remainder)
  }
  return dummyList.next
};