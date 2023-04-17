/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').reduce((prev, cur) => {
    prev += ` ${reverse(cur)}`
    return prev
  }, '').slice(1)
  function reverse(s) {
    s = s.split('')
    let [i, j] = [0, s.length - 1]
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
    }
    return s.join('')
  }
};