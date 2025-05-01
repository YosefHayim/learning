"use strict";

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the
// Fibonacci sequence. Recall that the Fibonacci sequence is the sequence
// of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

// incorrect
// const fib = (n) => {
//   let count = 10;

//   if (count < 1) {
//     return;
//   }
//   // get current number
//   // add to it the prev number
//   //  thats the next number
//   // continue until the last number of n
//   // 1 + 1 = 2 , 2 + 3 = 5 ,
//   console.log(`before adding:${n}`);
//   n++;
//   console.log(`after adding:${n}`);
//   return n + fib(n - 1);
// };

// correct
// const fib = (n) => {
//   if (n <= 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

// fib(10);
