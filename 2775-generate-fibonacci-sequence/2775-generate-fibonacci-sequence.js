/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let [a, b] = [0, 1]
  yield a
  yield b
  while(true) {
    [a, b] = [b, a + b]
    yield b
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */