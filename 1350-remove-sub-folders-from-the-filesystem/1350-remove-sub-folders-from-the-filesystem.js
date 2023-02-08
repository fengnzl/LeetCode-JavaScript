/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort()
  const ans = [folder[0]]
  for (let i = 1;i < folder.length;i++) {
    const prev = ans[ans.length - 1]
    const len = prev.length
    if (!(len < folder[i].length && (folder[i].slice(0, len) === prev) && folder[i][len] === '/')) {
      ans.push(folder[i])
    }
  }
  return ans
};