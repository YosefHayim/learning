"use strict";

// implement a function called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array, there can be
// negative numbers in the array, but it will be always sorted.

// 65 / 100 score
// const countUniqueValues = (arr) => {
//   if (arr.some((val) => typeof val !== "number")) throw new Error("Array must contain only numbers");

//   let countValues = {};

//   // iterate over all array and if its not in countValues add it
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (!countValues[value]) {
//       countValues[value] = 1;
//     }
//   }
//   const result = Object.keys(countValues).length;
//   console.log(result);
//   return result;
// };

// countUniqueValues([1, 1, 1, 1, 1, 1, 2]);
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13]);

// correct
// const countUniqueValues = (arr) => {
//   if (arr.some((val) => typeof val !== "number")) throw new Error("Array must contain only numbers");

//   if (arr.length === 0) return 0;

//   let count = 1; // start at 1 because the first value is unique by default

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
