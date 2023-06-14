/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.trim().split(' ')
  return arr.filter(str => !!str).reverse().join(' ')
};