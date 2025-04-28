// write a function called sumZero which accepts a sorted array of integers.
// The Function should find the first pair where the sum is 0. return an array that includes
// both values that sum to 0 or undefined if a pair does not exist.

// example sumZero([-3,-2,-1,0,1,2,3]) // result is [-3,3]

// 35 / 100 score.
// const sumZero = (arr) => {
//   // 1. for each index within the array sum with the next index.
//   let reverseIndex = arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     let n = arr[i];
//     let nextN = arr[(reverseIndex -= 1)];
//     if (n + nextN === 0) {
//       console.log("Match found");
//       return [n, nextN];
//     } else {
//       console.log("undefined");
//       return undefined;
//     }
//   }
//   // return undefined;
//   // 2. first sum that gets to 0 return the result else return undefined.
// };

// sumZero([-3, -2, -1, 0, 1, 2, 3]);

// Correct
// const sumZero = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return undefined;
// };
