/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//   const ans = []
//   backtrack(nums, 0, [], new Set(), new Set())
//   return ans
//   function backtrack(nums, stage, path, indexSet, arrSet) {
//     if (stage === nums.length) {
//       const val = path.join()
//       if (!arrSet.has(val)) {
//         ans.push([...path])
//         arrSet.add(val)
//       }
//       return
//     }
//     for (let i = 0;i < nums.length;i++) {
//       if (!indexSet.has(i)) {
//         indexSet.add(i)
//         path.push(nums[i])
//         backtrack(nums, stage + 1, path, indexSet, arrSet)
//         path.pop()
//         indexSet.delete(i)
//       }
//     }
//   }
// };
var permuteUnique = function(nums) {
  const ans = []
  const map = new Map()
  nums.forEach(val => map.set(val, (map.get(val) || 0) + 1))
  const uniqueValue = []
  const countArr = []
  map.forEach((value, key) => {
    uniqueValue.push(key)
    countArr.push(value)
  })
  backtrack(uniqueValue, 0, [], nums.length)
  return ans
  
  function backtrack(valueArr, stage, path, len) {
    if (stage === len) {
      ans.push([...path])
      return
    }
    for (let i = 0;i < valueArr.length;i++) {
      if (countArr[i] === 0) continue
      path.push(valueArr[i])
      countArr[i]--
      backtrack(valueArr, stage + 1, path, len)
      countArr[i]++
      path.pop()
    }
  }
};