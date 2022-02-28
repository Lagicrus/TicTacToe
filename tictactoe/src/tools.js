/**
 * Returns if all the entries in an array are the same
 * @param {Array} checkArray The array to check
 * @returns {boolean}
 */
export function allEqual(checkArray) {
  return checkArray.every((v) => v === checkArray[0]);
}