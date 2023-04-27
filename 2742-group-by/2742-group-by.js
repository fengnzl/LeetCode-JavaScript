/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const ans = {}
  for (const val of this) {
    const key = fn(val)
    if (!ans[key]) {
      ans[key] = []
    }
    ans[key].push(val)
  }
  return ans
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */