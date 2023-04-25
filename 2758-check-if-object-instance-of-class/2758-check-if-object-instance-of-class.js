/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (classFunction == null || obj == null) {
    return false
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