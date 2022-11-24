# [3\. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/)

## Description

Difficulty: **Medium**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Sliding Window](https://leetcode.com/tag/sliding-window/)


Given a string `s`, find the length of the **longest** <span data-keyword="substring-nonempty">**substring**</span> without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

*   0 <= s.length <= 5 * 10<sup>4</sup>
*   `s` consists of English letters, digits, symbols and spaces.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0
  let p = 0
  const set = new Set()
  let max = - 1
  for (let i = 0;i < s.length;i++) {
    while (set.has(s[i])) {
      set.delete(s[p])
      p++
    }
    set.add(s[i])
    const val = i - p + 1
    if (val > max) {
      max = val
    }
  }
  return max
};
```
