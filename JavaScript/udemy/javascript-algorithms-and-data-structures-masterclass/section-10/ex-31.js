"use strict";

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch -
// you can read how
// to implement it here -
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// score 30/100
// const binarySearch = (arr, target) => {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((arr.length - 1) / 2);

//   while (left < right) {
//     if (arr[middle] === target) {
//       console.log(`found:${arr[middle]}`);
//       return arr[middle];
//     } else if (arr[middle] < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return -1;
// };

// correct
// const binarySearch = (arr, target) => {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);

//     if (arr[middle] === target) {
//       return middle; // return the index, not value
//     } else if (arr[middle] < target) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }

//   return -1; // target not found
// };

// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95); // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100); // -1
