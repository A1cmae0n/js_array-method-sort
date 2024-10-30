'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      // Default string comparison to match JavaScript's native sort
      compareFunction = (a, b) => String(a) > String(b);
    }
    // Bubble sort algorithm
    const arr = this.slice(); // Create shallow copy of the array
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (compareFunction(arr[j], arr[j + 1]) > 0) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    // Clear the original array and push sorted elements
    this.length = 0;
    for (const item of arr) {
      this.push(item);
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
