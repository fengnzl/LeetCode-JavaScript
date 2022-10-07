# 差分数组
通过差分数组的思想，对每个start进行+1，对每个end-1，最后通过Object.values不断计数，即可找到最大值。较为简洁，但因高频率存取Object中的耗时较高所以效率不高，
```
var MyCalendarThree = function() {
this.planTimes = {}
};
​
/**
* @param {number} start
* @param {number} end
* @return {number}
*/
MyCalendarThree.prototype.book = function(start, end) {
this.planTimes[start] = (this.planTimes[start] || 0) + 1
this.planTimes[end] = (this.planTimes[end] || 0) -
let [cur, res] = [0, 0]
Object.values(this.planTimes).forEach(val => {
cur += val
res = Math.max(res, cur)
})
return res
};
```
# 线段树
Each time adding a new event [start, end), we start from the root node, which represents the time interval [0, C], where C is the largest possible time and equals to 1e9 in this problem, check if [start, end - 1] has any intersection with current range [L, R] ([0, C] for the root node), and update those nodes recursively:
​
1. If L > end - 1 or R < start, no elements in [start, end - 1] are included in current node, just return.
2. If start <= L and R >= end - 1, the range represented by this node is completely contained in [start, end - 1]. All elements in the range will be added by 1, so we just need to increase its lazy and val by 1 and stop.
3. Otherwise, only partial numbers in this range are coverd by [start, end). We just go to the two child nodes and repeat the checking steps above to update them. After updating data in child nodes, don't forget to update val of our current node by lazy + max(left.val, right.val), because the max numbers must come from either left or right half of the range, plus the number shared by all elements in the interval, which is stored in lazy.
4. The val of the root node is exactly the answer we want.
​
[宫水三叶题解](https://leetcode.cn/problems/my-calendar-iii/solution/by-ac_oier-cv31/)
[官方题解](https://leetcode.com/problems/my-calendar-iii/solution/)
[线段数模板](https://leetcode.cn/problems/range-module/solution/by-jiang-hui-4-tu5a/)