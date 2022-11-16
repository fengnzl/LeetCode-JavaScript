# [739\. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Stack](https://leetcode.com/tag/stack/), [Monotonic Stack](https://leetcode.com/tag/monotonic-stack/)


Given an array of integers `temperatures` represents the daily temperatures, return _an array_ `answer` _such that_ `answer[i]` _is the number of days you have to wait after the_ i<sup>th</sup> _day to get a warmer temperature_. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Example 1:**

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

**Example 2:**

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

**Example 3:**

```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

**Constraints:**

*   1 <= temperatures.length <= 10<sup>5</sup>
*   `30 <= temperatures[i] <= 100`


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  if (n === 1) return [0]
  const ans = Array(n).fill(0)
  const stack = []
  for (let i = 0;i < n;i++) {
    if (!stack.length) {
      stack.push(i)
      continue
    }
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const left = stack.pop()
      ans[left] = i - left
    }
    stack.push(i)
  }
  return ans
};
```
