/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  timePoints.sort()
  let minus = Infinity
  const firstTime = getMinutes(timePoints[0])
  let prevTime = firstTime
  for (let i = 1;i < timePoints.length;i++) {
    const curTime = getMinutes(timePoints[i])
    minus = Math.min(minus, curTime - prevTime)
    if (minus === 0) return minus
    prevTime = curTime
  }
  // 计算首尾差值
  minus = Math.min(minus, firstTime + 24 * 60 - prevTime)
  return minus
    
  function getMinutes(time) {
    const [m, s] = time.split(':')
    return (Number(m)) * 60 + Number(s)
  }
};