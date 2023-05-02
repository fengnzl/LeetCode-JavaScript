/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
  let cancel = () => {}
  const promise = new Promise((resolve, reject) => {
    cancel = () => {
      run('Cancelled', 'throw')
    }
    function run(res, funcName = 'next') {
      try {
        const { value, done } = generator[funcName](res)
        if (done) {
          return resolve(value)
        }
        value.then(ret => {
          run(ret)
        }).catch(err => {
          run(err, 'throw')
        })
      } catch(e) {
        reject(e)
      }
    }
    run(null)
  })
  return [cancel, promise]
  function isPromise(target) {
    return typeof target === 'object' && typeof target?.then === 'function'
  }
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */