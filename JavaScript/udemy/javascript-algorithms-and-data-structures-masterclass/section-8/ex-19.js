"use strict";

// recursiveRange
// Write a function called recursiveRange which accepts a number
// and adds up all the numbers
// from 0 to the number passed to the function

// score 35/100
// const recursiveRange = (n) => {
//   if (n === 0) {
//     return;
//   }
//   let nextN = n - 1;
//   let res = n + nextN;
//   console.log(res);
//   return recursiveRange(nextN);
// };

// correct
// const recursiveRange = (n) => {
//   if (n === 0) {
//     return 0; // Exit condition: if n is 0, the sum is 0
//   }
//   const result = n + recursiveRange(n - 1); // Add current n to result of recursive call
//   console.log(result);
//   return result;
// };

// SAMPLE INPUT/OUTPUT
// recursiveRange(6); // 21
// recursiveRange(10); // 55
