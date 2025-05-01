"use strict";

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the
// callback. Otherwise it returns false.

// incorrect
// const isOdd = (val) => val % 2 !== 0;
// function someRecursive(arr, cb) {
//   if (arr.length === 1) return false;

//   if (cb(arr[arr.length - 1])) {
//     arr.pop();
//     console.log(cb);
//     console.log(arr);
//     return someRecursive(arr, cb);
//   } else {
//     arr.pop();
//     console.log(cb);
//     console.log(arr);
//     return someRecursive(arr, cb);
//   }
// }

// correct
// function someRecursive(arr, cb) {
//   if (arr.length === 0) return false; // base case: empty array -> no matches
//   if (cb(arr[0])) return true; // if callback returns true for first element
//   return someRecursive(arr.slice(1), cb); // recurse on the rest of the array
// }

// someRecursive([1, 2, 3, 4], isOdd); // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
