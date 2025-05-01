"use strict";

// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
// Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)
// correct
// const sameFrequency = (number, secondNumber) => {
//   if (!number && !secondNumber) throw new Error("Must provide two numbers");
//   if (typeof number !== "number" && typeof secondNumber !== "number") throw new Error("Must be numbers type");
//   if (number < 0 && secondNumber < 0) throw new Error("Numbers must be above 0");

//   // must convert to strings because cant iterate over numbers.
//   const digits = number.toString();
//   const secDigits = secondNumber.toString();

//   if (digits.length !== secDigits.length) {
//     console.log("False");
//     return false;
//   }

//   const freqCount = {};
//   const secFreqCount = {};

//   // count frequency for each object
//   for (let i = 0; i < digits.length; i++) {
//     let currentNumber = digits[i];
//     if (!freqCount[currentNumber]) {
//       freqCount[currentNumber] = 1;
//     } else {
//       freqCount[currentNumber]++;
//     }
//   }

//   for (let i = 0; i < secDigits.length; i++) {
//     let secCurrentNumber = secDigits[i];
//     if (!secFreqCount[secCurrentNumber]) {
//       secFreqCount[secCurrentNumber] = 1;
//     } else {
//       secFreqCount[secCurrentNumber]++;
//     }
//   }

//   for (let v in freqCount) {
//     if (freqCount[v] !== secFreqCount[v]) {
//       console.log("False");
//       return false;
//     }
//   }

//   console.log("True");
//   return true;
// };

// Sample Input:
// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
