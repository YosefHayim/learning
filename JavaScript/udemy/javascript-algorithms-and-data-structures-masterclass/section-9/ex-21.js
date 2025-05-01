"use strict";

// reverse
// Write a recursive function called reverse which
// accepts a string and returns a new string in reverse.

// not recursive version but succeed!
// const reverse = (str) => {
//   let wordReversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     const letter = str[i];
//     wordReversed += letter;
//   }
//   console.log(wordReversed);
//   return wordReversed;
// };

// score 77/100
const reverseRecursive = (str) => {
  if (str.length === 0) return ""; // My error forgot to return empty string, instead of undefined
  const lastLetter = str[str.length - 1];
  const withoutLastLetter = str.slice(0, str.length - 1);
  return lastLetter + reverseRecursive(withoutLastLetter);
};

console.log(reverseRecursive("awesome"));
