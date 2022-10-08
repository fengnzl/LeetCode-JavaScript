/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // sort nums
  nums.sort((a, b) => a - b)
  const n = nums.length
  let closest = Infinity
  for (let i = 0;i < n;i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let p = i + 1
    let q = n - 1
    while (p < q) {
      if (p >= i + 2 && nums[p] === nums[p - 1]) {
        p++
        continue
      }
      if (q < n - 1 && nums[q] === nums[q + 1]) {
        q--
        continue
      }
      const sum = nums[i] + nums[p] + nums[q]
      if (sum === target) return target
      const minus = Math.abs(sum - target)
      if (minus < Math.abs(closest - target)) {
        closest = sum
      }
      if (sum > target) {
        q--
      } else {
        p++
      }
    }
  }
  return closest
};