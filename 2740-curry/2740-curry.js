/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    const len = fn.length
    const params = []
    return function curried(...args) {
      params.push(...args)
      if (params.length >= len) {
        return fn(...params)
      } else {
        return curried
      }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */