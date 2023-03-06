/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  let rightA = 0
  for (let i = 0;i < s.length;i++) {
    if (s[i] === 'a') rightA++
  }
  let res = rightA
  let leftB = 0
  for (let i = 0;i < s.length;i++) {
    if (s[i] === 'a') {
      rightA--
    } else {
      leftB++
    }
    res = Math.min(res, rightA + leftB)
  } 
  return res
};