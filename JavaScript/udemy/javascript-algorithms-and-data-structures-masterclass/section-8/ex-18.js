"use strict";

// productOfArray
// Write a function called productOfArray which takes in an
// array of numbers and returns the product
// of them all.

// failed to understand
// correct
const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  const res = arr[0] * productOfArray(arr.slice(1));
  console.log(res);
  return res;
};

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60
