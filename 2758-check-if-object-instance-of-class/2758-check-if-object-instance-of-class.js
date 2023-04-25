/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (classFunction == null || obj == null) {
    return false
  }
  const baseType = ['number', 'string', 'undefined', 'boolean', 'symbol', 'bigint']
  const getType = target => Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
  const isBaseType = baseType.includes(getType(obj))
  // () => checkIfInstance(5, Number)
  if (isBaseType && obj === classFunction?.name) {
    return true
  }
  let proto = Object.getPrototypeOf(obj)
  const ctor = classFunction.prototype
  while(proto) {
    if (proto === ctor) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */