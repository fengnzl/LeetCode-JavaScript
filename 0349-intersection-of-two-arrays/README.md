# [349\. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/submissions/)

## Description

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Binary Search](https://leetcode.com/tag/binary-search/), [Sorting](https://leetcode.com/tag/sorting/)


Given two integer arrays `nums1` and `nums2`, return _an array of their intersection_. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

**Constraints:**

*   `1 <= nums1.length, nums2.length <= 1000`
*   `0 <= nums1[i], nums2[i] <= 1000`


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   const set = new Set(nums2)
//   return Array.from(new Set(nums1)).filter(val => set.has(val))
// };
​
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const n = nums1.length
  const m = nums2.length
  const ans = []
  let [i, j] = [0, 0]
  while (i < n && j < m) {
    const num1 = nums1[i]
    const num2 = nums2[j]
    if (num1 === num2) {
      // 确保添加数字的唯一性
      if (!ans.length || ans[ans.length - 1] !== num1) {
        ans.push(num1)
      }
      i++
      j++
    } else if (num1 < num2) {
      i++
    } else {
      j++
    }
  }
  return ans
};
```
