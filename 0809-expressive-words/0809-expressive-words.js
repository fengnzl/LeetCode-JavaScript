/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// 先简化成s 和其中一个单词比较 ，两个指针（i, j)分别对应(s, word)，如果 s[i] = word[j],就分别前进一格，如果不相同，就要检查s中是否有3个或以上连续相同的字母，最后判断 j 是否有走到word最后
var expressiveWords = function(s, words) {
  return words.reduce((acc, word) => acc + check(s, word), 0)
  function check(s, word) {
    const [m, n] = [s.length, word.length]
    let [i, j] = [0, 0]
    while (i < m) {
      if (s[i] === word[j]) {
        i++
        j++
      } else {
        if (i > 1 && s[i] !== s[i - 1]) return false
        
        let k = i
        while (s[i] === s[k]) i++
        if (i - k === 1 && s[k] !== s[k - 2]) return false
      }
    }
    return j === n
  }
};