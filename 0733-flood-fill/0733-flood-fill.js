/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const raw = image[sr][sc]
  const h = image.length
  const w = image[0].length
  const hasFilled = new Set()
  fill(image, sr, sc)
  return image
  function fill(image, sr, sc) {
    image[sr][sc] = color
    hasFilled.add(`${sr}${sc}`)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    directions.forEach(([offsetH, offsetW]) => {
      const newSr = sr + offsetH
      const newSc = sc + offsetW
      if (!hasFilled.has(`${newSr}${newSc}`)
        && newSr >= 0
        && newSr < h
        && newSc >= 0
        && newSc < w
        && image[newSr][newSc] === raw
      ) {
        fill(image, newSr, newSc)
      }
    })
  }
};