/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let [low, high] = [1, n]
      while (low <= high) {
        const mid = low + ((high - low) >> 1)
        if (isBadVersion(mid)) {
          if (mid === 1 || !isBadVersion(mid - 1)) {
            return mid
          }
          high = mid - 1
        } else {
          low = mid + 1
        }
      }
      return -1
    };
};