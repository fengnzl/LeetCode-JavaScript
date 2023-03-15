/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  // 先从左到右考虑 只要右边比左边大，candy[i] = candy[i - 1] + 1
  //  再从右边到左边进行遍历，只要左边比右边大， candy[i] = Math.max(candy[i + 1] + 1, candy[i])
  // 相邻孩子中，评分高的总比评分低的多获得一个糖果 从而可以获得全局最少糖果数目
  const candy = Array(ratings.length).fill(1)
  //  从左往右遍历
  for (let i = 1;i < ratings.length;i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1
    }
  }
  for (let i = ratings.length - 2;i >= 0;i--) {
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i + 1] + 1, candy[i])
    }
  }
  return candy.reduce((prev, cur) => prev + cur)
};