/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const root = new Trie()
  for (let i = 0;i < folder.length;i++) {
    const path = split(folder[i])
    let cur = root
    for (const name of path) {
      if (!cur.children.get(name)) {
        cur.children.set(name, new Trie())
      }
      cur = cur.children.get(name)
    }
    cur.ref = i
  }
  const dfs = (folder, ans, root) => {
    if (root.ref !== -1) {
      ans.push(folder[root.ref])
      return
    }
    for (const child of root.children.values()) {
      dfs(folder, ans, child)
    }
  }
  const ans = []
  dfs(folder, ans, root)
  return ans
};
function split(path) {
  return path.split('/').slice(1)
}
class Trie {
  constructor() {
    this.ref = -1
    this.children = new Map()
  }
}