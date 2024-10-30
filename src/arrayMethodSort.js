'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      return this;
    }
    let tmp = this.slice();

    for (let i = 0; i < this.length; i++) {
      // we count the number of times an element of the list fails the comparison
      // we then take that number as its rank and index
      let rank = 0;

      for (let j = 0; j < this.length; j++) {
        if (!compareFunction(this[i], this[j])) {
          if (this[i] !== this[j]) {
            rank += 1;
          }
        }
      }
      tmp[rank] = this[i];
    }
    return tmp;
  };
}

// applyCustomSort();
// const result = ['c', 'ab', 'a', 'ad', 'b'].sort2((a, b) => a < b);
// console.log(result);

module.exports = applyCustomSort;
