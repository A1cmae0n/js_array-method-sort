'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];
        if (compareFunction(a, b) < 0) {
          continue;
        } else {
          const tmp = this[i];
          this[i] = this[j];
          this[j] = tmp;
        }
      }
    }
    return this;
  };
}

// applyCustomSort();
// const result = [3, 2, 1].sort2((a, b) => a - b);
// console.log(result); // Output: [1, 2, 3]

module.exports = applyCustomSort;
