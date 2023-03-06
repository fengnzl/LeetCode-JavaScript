/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  // 二叉搜索树 左子树都小于根节点，右子树大于根节点
  return isValid(postorder, 0, postorder.length - 1)
  function isValid(postorder, i, j) {
    if (i >= j) return true
    // 获取左节点边界
    let p = i
    while (p < j && postorder[p] < postorder[j]) {
      p++
    }
    // 获取右节点
    let q = p
    while (q < j) {
      if (postorder[q] < postorder[j]) return false
      q++
    }
    const leftValid = isValid(postorder, i, p - 1)
    if (!leftValid) return false
    return isValid(postorder, p, j - 1)
  }
};