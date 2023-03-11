/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 加入第一天购买 第三天卖可以获取最大利润
  // prices[2] - prices[0] = (prices[2] - prices[1]) + (prices[1] - prices[0])
  // 相当于获取每天减去前一天的值总和
  // [7,1,5,10,3,6,4] 对应相邻两天的差值 [-6, 4, 5, -7, 3, -2] 这时我们对正值进行总和计算可以的得到 12 与 第二天买第四天卖随后，第五天买第六天卖获取的最大总利润相同
  //  因此我们只需要对相邻差值为正的计算总和即可
  let max = 0
  for (let i = 1;i < prices.length;i++) {
    max += Math.max(prices[i] - prices[i - 1], 0)
  }
  return max
};