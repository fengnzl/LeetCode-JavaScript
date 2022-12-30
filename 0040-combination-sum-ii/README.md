# [40\. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Backtracking](https://leetcode.com/tag/backtracking/)


Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:** The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
```

**Constraints:**

*   `1 <= candidates.length <= 100`
*   `1 <= candidates[i] <= 50`
*   `1 <= target <= 30`


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ans = []
  const map = new Map()
  candidates.forEach(val => map.set(val, (map.get(val) || 0) + 1))
  const uniqueNums = []
  const countArr =[]
  map.forEach((count, num) => {
    uniqueNums.push(num)
    countArr.push(count)
  })
  backtrack(uniqueNums, 0, [], target)
  return ans
  function backtrack(nums, k, path, left) {
    if (left === 0) {
      ans.push([...path])
      return
    }
    if (k === nums.length) return
    for (let count = 0;count <= countArr[k] && count <= Math.floor(left / nums[k]);count++) {
      for (let i = 0;i < count;i++) {
        path.push(nums[k])
      }
      backtrack(nums, k + 1, path, left - nums[k] * count)
      for (let i = 0;i < count;i++) {
        path.pop()
      }
    }
  }
};
```
