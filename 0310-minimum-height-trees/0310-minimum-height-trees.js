/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  // 可以先对每个节点遍历 bfs 得到每个节点树的高度，然后取最小值会超时
  // 我们可以从出度为1的作为源开始bfs遍历,在这过程中将出度为1的不断添加到队列，
  // 最后找到同时向中间靠近的节点，这个节点相当于把整个距离二分了，那么这个节点就是到其余节点的距离最近
  // 如果只有一个节点
  if (n === 1) {
    return [0]
  }
  const degree = Array(n).fill(0)
  // 记录每个节点的相邻节点
  const map = new Map()
  for (const [i, j] of edges) {
    // 计算出度
    degree[i]++
    degree[j]++
    // 对每个节点的相邻节点进行记录
    map.set(i, (map.get(i) || []).concat(j))
    map.set(j, (map.get(j) || []).concat(i))
  }
  // 获取出度为1 节点，即获取源
  let arr = []
  for (let i = 0;i < n;i++) {
    if (degree[i] === 1) {
      arr.push(i)
    }
  }
  let ans = []
  while(arr.length) {
    // 重置 ans 结果
    ans = []
    const copyArr = arr.slice()
    const n = copyArr.length
    for (const i of copyArr) {
      // 将当前节点放到结果中 每次循环的都是出度为1 的节点,获取最后同时靠近中间节点的数据
      ans.push(i)
      // 获取相邻节点
      const neighbors = map.get(i)
      for (const neighbor of neighbors) {
        // 将相邻节点出度减1
        degree[neighbor]--
        // 如果出度为1 将其入队
        if (degree[neighbor] === 1) {
          arr.push(neighbor)
        }
      }
    }
    // 更新队列
    arr = arr.slice(n)
  }
  return ans
};