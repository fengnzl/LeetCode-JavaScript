/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  // 三边和定理： 任意两边之和大于第三边
  // 只要最小两边和大于第三边就可以构成三角形
  // 先对 nums 排序，倒序只要 nums[i - 2] + nums[i - 1] > nums[i] 即为最大值
  nums = quickSort(nums)
  for (let i = nums.length - 1;i >= 2;i--) {
    if (nums[i] < nums[i - 1] + nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2]
    }
  }
  return 0
};

function quickSort(nums) {
  quickSortR(nums, 0, nums.length - 1)
  return nums
}
function quickSortR(nums, p, r) {
  if (p >= r) return
  //  获得区分点
  const q = partition(nums, p, r)
  quickSortR(nums, p, q - 1)
  quickSortR(nums, q + 1, r)
}
function partition(nums, p, r) {
  const value = nums[r]
  let i = p
  let j = r - 1
  while (i <= j) {
    if (nums[i] < value) {
      i++
    } else if (nums[j] > value) {
      j--
    } else {
      swap(nums, i, j)
      i++
      j--
    }
  }
  swap(nums, i, r)
  return i
}
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}