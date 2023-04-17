/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let [low, fast, count] = [dummy, dummy, 0]
  while (count < n) {
    fast = fast.next
    count++
  }
  while (fast !== null &&  fast.next !== null) {
    low = low.next
    fast = fast.next
  }
  low.next = low.next.next
  return dummy.next
};