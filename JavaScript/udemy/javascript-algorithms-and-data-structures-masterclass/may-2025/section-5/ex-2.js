// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.

// With O(n) of time and space

// const countUniqueValues = (arr) => {
//   const end = arr.length - 1;
//   if (arr[0] > arr[end]) {
//     throw new Error("This is not sorted");
//   }
//   const removedDuplicates = new Set(arr);
//   console.log(removedDuplicates.size);
//   return removedDuplicates.size;
// };

// With O(n) and space of O(1)
// const countUniqueValues = (arr) => {
//   if (arr.length === 0) return 0;

//   let uniqueCounts = 1; // start at 1 because the first value is unique by default

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       uniqueCounts++;
//     }
//   }

//   console.log(uniqueCounts);
//   return uniqueCounts;
// };
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4
// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.
