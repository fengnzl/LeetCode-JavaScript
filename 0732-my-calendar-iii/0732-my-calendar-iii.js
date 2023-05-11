var MyCalendarThree = function() {
  this.map = new Map()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  this.map.set(start, (this.map.get(start) || 0) + 1)
  this.map.set(end, (this.map.get(end) || 0) - 1)
  const keys = [...this.map.keys()].sort((a, b) => a - b)
  let ans = 0
  let count = 0
  for (const key of keys) {
    count += this.map.get(key)
    if (count > ans) ans = count
  }
  return ans
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */