/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
    const len = functions.length
    if (len === 0) return x
    if (len === 1) return functions[0](x)
    return functions.reduceRight((prev, cur) => cur(prev), x)  
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */