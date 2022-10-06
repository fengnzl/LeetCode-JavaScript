
var TimeMap = function() {
  this.timeMap = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  const keyArr = this.timeMap.get(key) || []
  keyArr.push([timestamp, value])
  this.timeMap.set(key, keyArr)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.timeMap.has(key)) return ''
  const keyArr = this.timeMap.get(key)
  if (timestamp < keyArr[0][0]) return ''
  return bsearch(keyArr, timestamp)
};

function bsearch(timesArr, timestamp) {
  let [low, high, n] = [0, timesArr.length - 1, timesArr.length]
  while (low <= high) {
    const mid = low + ((high - low)/2 >> 0)
    if (timesArr[mid][0] <= timestamp) {
      if (mid === n - 1 || timesArr[mid + 1][0] > timestamp) {
        return timesArr[mid][1]
      } else {
        low = mid + 1
      }
    } else {
      high = mid - 1
    }
  }
  return ''
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */