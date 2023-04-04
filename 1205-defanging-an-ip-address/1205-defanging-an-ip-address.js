/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  const n = address.length
  let str = ''
  for (let i = 0;i < n;i++) {
    if (address[i] !== '.') {
      str += address[i]
    } else {
      str += '[.]'
    }
  }
  return str
};