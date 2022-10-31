/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const version1Arr = version1.split('.')
    const version2Arr = version2.split('.')
    const len1 = version1Arr.length
    const len2 = version2Arr.length
    let i = 0
    const min = Math.min(len1, len2)
    while (i < min) {
      const val1 = Number(version1Arr[i])
      const val2 = Number(version2Arr[i])
      if (val1 > val2) return 1
      if (val1 < val2) return -1
      i++
    }
    if (len1 === min) {
      while (i < len2) {
        if (Number(version2Arr[i]) > 0) return -1
        i++
      }
    } else if (len1 > min) {
      while (i < len1) {
        if (Number(version1Arr[i]) > 0) return 1
        i++
      }
    }
    return 0
};