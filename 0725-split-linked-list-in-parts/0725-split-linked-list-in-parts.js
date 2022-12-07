/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  const size = getNodeSize(head)
  const ans = Array.from({ length: k }, () => null)
  if (size === 0) return ans
  const splitNum = Math.floor(size / k)
  let remainNum = size - splitNum * k
  const numArr = Array(k).fill(splitNum)
  for (let i = 0;i < remainNum;i++) {
    numArr[i]++
  }
  let p = head
  let index = 0
  let prev = head
  let cur = 1
  while (p != null) {
    if (cur === numArr[index]) {
      ans[index] = prev
      index++
      cur = 1
      const next = p.next
      p.next = null
      p = next
      prev = p
    } else {
      cur++
      p = p.next
    }
  }
  return ans
};

function getNodeSize(head) {
  if (head == null) return 0
  let p = head
  let size = 0
  while (p != null) {
    p = p.next
    size++
  }
  return size
}