const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let result = ``;
  arr.forEach(function (i, index) {
    if (i === arr[index + 1]) {
      count++;
    } else {
      result += `${count > 1 ? count + i : i}`;
      count = 1;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
