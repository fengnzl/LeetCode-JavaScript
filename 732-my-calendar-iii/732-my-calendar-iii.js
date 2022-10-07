
var MyCalendarThree = function() {
  this.planTimes = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  this.planTimes[start] = (this.planTimes[start] || 0) + 1
  this.planTimes[end] = (this.planTimes[end] || 0) - 1
  let [cur, res] = [0, 0]
  Object.values(this.planTimes).forEach(val => {
    cur += val
    res = Math.max(res, cur)
  })
  return res
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */