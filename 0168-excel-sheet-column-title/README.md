# [168\. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/submissions/)

## Description

Difficulty: **Easy**  

Related Topics: [Math](https://leetcode.com/tag/math/), [String](https://leetcode.com/tag/string/)


Given an integer `columnNumber`, return _its corresponding column title as it appears in an Excel sheet_.

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```

**Example 1:**

```
Input: columnNumber = 1
Output: "A"
```

**Example 2:**

```
Input: columnNumber = 28
Output: "AB"
```

**Example 3:**

```
Input: columnNumber = 701
Output: "ZY"
```

**Constraints:**

*   1 <= columnNumber <= 2<sup>31</sup> - 1


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let ans = ''
  while (columnNumber > 0) {
    columnNumber -= 1
    const curNum = columnNumber % 26
    const cur = String.fromCharCode(65 + curNum)
    ans = cur + ans
    columnNumber = Math.floor(columnNumber / 26)
  }
  return ans
};
```
