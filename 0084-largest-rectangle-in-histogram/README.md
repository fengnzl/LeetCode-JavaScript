# [84\. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Description

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Stack](https://leetcode.com/tag/stack/), [Monotonic Stack](https://leetcode.com/tag/monotonic-stack/)


Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return _the area of the largest rectangle in the histogram_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

```
Input: heights = [2,4]
Output: 4
```

**Constraints:**

*   1 <= heights.length <= 10<sup>5</sup>
*   0 <= heights[i] <= 10<sup>4</sup>


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const n = heights.length
  if (n === 1) return heights[0]
  // 增加守卫，从而可以使用统一的判断逻辑
  let max = 0
  const stack = [0]
  heights.push(0)
  heights.unshift(0)
  
  for (let i = 0;i < n + 2;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop()
      while (stack.length && heights[stack[stack.length - 1]] === heights[top]) {
        stack.pop()
      }
      const w = i - stack[stack.length - 1] - 1
      max = Math.max(max, w * heights[top])
    }
    stack.push(i)
  }
  return max
};
```
