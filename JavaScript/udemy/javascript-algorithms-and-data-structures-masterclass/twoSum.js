// Given an array of integers `nums` and an integer `target`,
// return indices of the two numbers such that they add up to target.
//
// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Because nums[0] + nums[1] == 9
// This is O(n^2) time complexity
// function twoSum(nums, target) {
//   const results = [];

//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];

//     for (let j = nums.length - 1; j > 0; j--) {
//       const nextNumber = nums[j];
//       if (n !== nextNumber && n + nextNumber === target) {
//         results.push(j, i);
//         return results;
//       }
//     }
//   }
// }

//This is O(n) time complexity
// function twoSum(nums, target) {
//   const numToIndex = {}; // Object to store number: index

//   for (let i = 0; i < nums.length; i++) {
//     console.log(numToIndex);
//     const current = nums[i];
//     const needed = target - current;

//     if (numToIndex.hasOwnProperty(needed)) {
//       return [numToIndex[needed], i];
//     }
//     numToIndex[current] = i;
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
