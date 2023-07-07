/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => {
      if (isObject(item) || Array.isArray(item)) {
        return compactObject(item)
      } else {
        return item
      }
    }).filter(Boolean)
  } else {
    const ans = {}
    Object.entries(obj).forEach(([key, value]) => {
      if (isObject(value) || Array.isArray(value)) {
        ans[key] = compactObject(value)
      } else if (Boolean(value)) {
        ans[key] = value
      }
    })
    return ans
  }
};
function isObject(arg) {
  return arg !== null && typeof arg === 'object' 
} 