# [69\. Sqrt(x)](https://leetcode.com/problems/sqrtx/submissions/)

## Description

Difficulty: **Easy**  

Related Topics: [Math](https://leetcode.com/tag/math/), [Binary Search](https://leetcode.com/tag/binary-search/)


Given a non-negative integer `x`, return _the square root of_ `x` _rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

*   For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Constraints:**

*   0 <= x <= 2<sup>31</sup> - 1


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  const n = x >> 1
  let [low, high] = [1, n]
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    const midPow2 = mid * mid
    if (midPow2 === x) {
      return mid
    } else if (midPow2 < x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid
      } else {
        low = mid + 1
      }
    } else {
      high = mid - 1
    }
  }
};
```
