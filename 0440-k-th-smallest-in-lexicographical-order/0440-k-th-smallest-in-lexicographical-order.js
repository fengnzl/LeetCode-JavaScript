/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let prefix = 1 // 前缀
  let p = 1 // 指针，表明当前位置，p === k 即为第 k 位
  while (p < k) {
    // 获取当前前缀下所有节点个数
    const count = getPrefixCount(prefix, n)
    if (p + count <= k) {
      // 说明不在当前前缀子节点下，前缀范围扩大
      prefix++
      p += count
    } else {
      // 在当前前缀的子节点里面，前缀找到下一层子节点
      prefix *= 10
      p++
    }
  }
  return prefix
  
  
  // prefix 前缀， n 为上界
  function getPrefixCount(prefix, n) {
    let cur = prefix
    let next = prefix + 1// 下一个前缀
    let count = 0 // 当前前缀下的节点个数
    // 当前前缀不能大于上界
    while(cur <= n) {
      count += Math.min(next, n + 1) - cur
      cur *= 10
      next *= 10
      
      // 如果说刚刚prefix是1，next是2，那么现在分别变成10和20
      // 1为前缀的子节点增加10个，十叉树增加一层, 变成了两层

      // 如果当前 prefix 为 10， next 为 20， 那么现在分别为 100 和 200
      // 1为前缀的子节点增加100个，十叉树又增加了一层，变成了三层
    }
    return count
  }
};