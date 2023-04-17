/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 使用双指针  对于 0 <= i < j <= numbers.length - 1
  // 如果 numbers[i] + numbers[j] === target 则直接返回 [i + 1, j + 1]
  //  numbers[i] + numbers[j] < target,  如果 j-- 则必有 numbers[i] + numbers[j] < target 所以需要 i++
  // 反之 numbers[i] + numbers[j] > target, 则需要 j--
  let [i, j] = [0, numbers.length - 1]
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1]
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }
  return [-1, -1]
};