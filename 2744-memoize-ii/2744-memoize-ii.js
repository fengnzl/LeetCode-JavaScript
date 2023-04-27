/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map()
    // 使用自增键值作为参数保存的数据
    let index = 0
    const keyMap = new Map()
    return function(...args) {
      let key = ''
      for (const param of args) {
        if (!keyMap.has(param)) {
          keyMap.set(param, index++)
        }
        key += `_${keyMap.get(param)}`
      }
      if (!map.has(key)) {
        map.set(key, fn(...args))
      }
      return map.get(key)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */