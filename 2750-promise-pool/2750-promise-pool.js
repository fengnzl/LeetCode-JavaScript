/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  let count = 0
  function start(resolve) {
    while (count < n) {
      if (!functions.length) return
      const fn = functions.shift()
      count++;
      fn().then(() => {
        count--
        if (!functions.length && count === 0) {
          resolve()
        }
        start(resolve)
      })
    }
  }
  // functions 为空数组
  if (!functions.length) {
    return Promise.resolve()
  }
  return new Promise(start)
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */