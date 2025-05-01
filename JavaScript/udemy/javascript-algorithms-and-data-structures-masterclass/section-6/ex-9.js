"use strict";

// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n,
// find if there exists a pair of elements in the array whose
// difference is n. This function should return true if the pair exists or false if it does not.

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

// score 30 / 100
// const findPair = (arr, n) => {
//   // if not provided arr and n
//   // if n is not type of number
//   for (let i = 0; i < arr.length; i++) {
//     const number = arr[i];
//     const nextNumber = arr[i + 1];
//     if (number - nextNumber === n) {
//       console.log("true");
//       return true;
//     }
//   }

//   for (let j = arr.length - 1; j > 0; j--) {
//     const number = arr[j];
//     const nextNumber = arr[j - 1];
//     if (number - nextNumber === n) {
//       console.log("true");
//       return true;
//     }
//   }
//   console.log("false");
//   return false;
// };

// correct
// const findPair = (arr, n) => {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = 1;

//   while (right < arr.length) {
//     const diff = arr[right] - arr[left];

//     if (diff === n && left !== right) {
//       return true;
//     } else if (diff < n) {
//       right++;
//     } else {
//       left++;
//     }

//     if (left === right) {
//       right++;
//     }
//   }

//   return false;
// };

// findPair([6, 1, 4, 10, 2, 4], 2); // true
// findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
// findPair([4, -2, 3, 10], -6); // true
// findPair([6, 1, 4, 10, 2, 4], 22); // false
// findPair([], 0); // false
// findPair([5, 5], 0); // true
// findPair([-4, 4], -8); // true
// findPair([-4, 4], 8); // true
// findPair([1, 3, 4, 6], -2); // true
// findPair([0, 1, 3, 4, 6], -2); // true
// findPair([1, 2, 3], 0); // false
