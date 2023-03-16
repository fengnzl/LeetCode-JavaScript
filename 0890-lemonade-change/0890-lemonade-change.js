/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  // 因为 5 元更通用，所以优先使用面额大的找零
  const count = {
    five: 0,
    ten: 0,
  }
  for (const bill of bills) {
    // 5元直接收取
    if (bill === 5) {
      count.five++
      continue
    }
    // 收取 10 元
    if (bill === 10) {
      // 如果没有 5 元的零钱则直接返回 false
      if (count.five < 1) {
        return false
      }
      count.five--
      count.ten++
      continue
    }
    // 收取 20 元
    if (bill === 20) {
      // 如果有一个 10 元和一个 5 元
      if (count.ten > 0 && count.five > 0) {
        count.ten--
        count.five--
        continue
      }
      // 如果有三个 5 元
      if (count.five > 2) {
        count.five -= 3
        continue
      }
      //  都不满足无法对 20 找零
      return false
    }
  }
  return true
};