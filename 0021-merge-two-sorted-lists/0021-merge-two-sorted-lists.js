/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode()
  let [p1, p2] = [list1, list2]
  let dummyHead = dummy
  while (p1 != null && p2 !== null) {
    if (p1.val < p2.val) {
      dummyHead.next = p1
      p1 = p1.next
    } else {
      dummyHead.next = p2
      p2 = p2.next
    }
    dummyHead = dummyHead.next
  }
  if (p1 === null) dummyHead.next = p2
  if (p2 === null) dummyHead.next = p1
  return dummy.next
};