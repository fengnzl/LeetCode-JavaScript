/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  if (o1 === o2) return true
  const getType = target => Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
  const type1 = getType(o1)
  const type2 = getType(o2)
  if (type1 !== type2) return false
  // baseType
  const baseType = ['string', 'boolean', 'null', 'undefined', 'number', 'bigint']
  if (baseType.includes(type1)) return false
  const keys = Reflect.ownKeys(o1)
  for (const key of keys) {
    if (!Reflect.has(o2, key) || !areDeeplyEqual(o1[key], o2[key])) {
      return false
    }
  }
  return true
};