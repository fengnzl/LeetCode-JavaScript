/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
  const obj = {}
  keyName.forEach((name, index) => {
    const [h, m] = keyTime[index].split(':')
    if (obj[name] === undefined) {
      obj[name] = [[Number(h), Number(m)]]
    } else {
      obj[name].push([Number(h), Number(m)])
    }
  })
  const keys = Object.keys(obj)
  const names = []
  keys.forEach(key => {
    const times = obj[key].sort((a, b) => {
      const [ah, am] = a
      const [bh, bm] = b
      if (ah > bh) {
        return 1
      }
      if (ah < bh) {
        return -1
      }
      return am - bm
    })
    if(!checkValid(times)) {
      names.push(key)
    }
  })
  return names.sort()
};

function checkValid(times) {
  if (times.length < 3) return true
  let startTime = times[0]
  let index = 0
  let count = 1
  for (let i = 1;i < times.length;i++) {
    const [curH, curM] = times[i]
    const [startH, startM] = startTime
    const inOneHour = curH === startH || (startH === curH - 1 && curM <= startM)
    console.log(inOneHour, times,count)
    if (inOneHour) {
      count++
      if (count >= 3) {
        return false
      }
      continue
    } else {
      startTime = times[++index]
    }
  }
  return true
}