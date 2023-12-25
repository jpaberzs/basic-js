const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n);
  let result = 0;
  arr.split('').forEach((item, index) => {
    let newNum = arr.slice(0, index) + arr.slice(index + 1);
    result = Math.max(result, newNum);
  });
  return +result;
}

module.exports = {
  deleteDigit,
};
