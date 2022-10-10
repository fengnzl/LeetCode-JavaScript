/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  const n = palindrome.length
  if (n <= 1) return ''
  const mid = n / 2 >> 0
  let i = 0
  while (palindrome[i] === 'a' && i <= mid) {
    i++
  }
  if (i >= mid) {
    return palindrome.slice(0, -1) + 'b'
  }
  return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1)
};