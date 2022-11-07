/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let typeObj = {}
  const len = fruits.length
  if (len <= 2) return len
  let [l, r] = [0, 0]
  let ans = 0
  let count = 0 
  while (r < len) {
    const tree = fruits[r++]
    typeObj[tree] = (typeObj[tree] || 0) + 1;
    while (Object.keys(typeObj).length > 2) {
      count = count < r - l - 1 ? r - l -1 : count;
      const removeTree = fruits[l++]
      typeObj[removeTree]--
      if (typeObj[removeTree] === 0) {
        delete typeObj[removeTree]
      }
    }
  }
  if (count < r - l) {
    count = r - l
  }
  return count
};