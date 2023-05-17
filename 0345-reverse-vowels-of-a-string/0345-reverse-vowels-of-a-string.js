/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const n = s.length
  let [i, j] = [0, n - 1]
  const arr = s.split('')
  const reg = /[aeiou]/i
  while (i < j) {
    if (!reg.test(arr[i])) {
      i++
    } else if (!reg.test(arr[j])) {
      j--
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return arr.join('')
};