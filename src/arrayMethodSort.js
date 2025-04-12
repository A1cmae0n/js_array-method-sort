'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // Default comparison function for strings
    let callback;
    if (typeof compareFunction === 'undefined') {
      callback = (a, b) => String(a).localeCompare(String(b));
    } else {
      callback = compareFunction;
    }
    // Bubble sort implementation
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        // If callback returns positive value, swap elements
        if (callback(this[j], this[j + 1]) > 0) {
          // Swap elements
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;

applyCustomSort();
