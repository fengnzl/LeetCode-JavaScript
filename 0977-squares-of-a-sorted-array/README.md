# [977\. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/submissions/)

## Description

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Sorting](https://leetcode.com/tag/sorting/)


Given an integer array `nums` sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.

**Example 1:**

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

**Example 2:**

```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

**Constraints:**

*   <span>1 <= nums.length <=</span> 10<sup>4</sup>
*   -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
*   `nums` is sorted in **non-decreasing** order.

**Follow up:** Squaring each element and sorting the new array is very trivial, could you find an `O(n)` solution using a different approach?

## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const n = nums.length
  const result = Array(n)
  let [i, j, k] = [0, n - 1, n - 1]
  while (i <= j) {
    const val1 = nums[i] * nums[i]
    const val2 = nums[j] * nums[j]
    if (val1 > val2) {
      result[k--] = val1
      i++
    } else {
      result[k--] = val2
      j--
    }
  }
  return result
};
```
