var MyCalendarTwo = function() {
  // 计数
  this.map = new Map()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  this.map.set(start, (this.map.get(start) || 0) + 1)
  this.map.set(end, (this.map.get(end) || 0) - 1)
  let count = 0
  const keys = [...this.map.keys()].sort((a, b) => a - b)
  for (const key of keys) {
    count += this.map.get(key)
    if (count > 2) {
      this.map.set(start, (this.map.get(start) || 0) - 1)
      this.map.set(end, (this.map.get(end) || 0) + 1)
      return false

    }
  }
  return true
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */