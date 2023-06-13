/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length
  let str = ''
  let i = 0
  let j = 0
  let turn = 0
  while(i < len1 && j < len2) {
    if (!turn) {
      str += word1[i++]
    } else {
      str += word2[j++]
    }
    turn = (turn + 1) % 2
  }
  if (i < len1) {
    str += word1.slice(i)
  } else if (j < len2) {
    str += word2.slice(j)
  }
  return str
};