// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:\
// Time Complexity - O(N + M)
// Space Complexity - O(1)

// incorrect, got understand wrong the task
// const isSubsequence = (wordOne, wordTwo) => {
//   // make sure both words are strings
//   // if only one provided throw error

//   for (let i = 0; i < wordOne.length; i++) {
//     const letter = wordOne[i];
//     if (!wordTwo.includes(letter)) {
//       console.log("false");
//       return false;
//     }
//     console.log("true");
//     return true;
//   }
// };

// correct one
// const isSubsequence = (wordOne, wordTwo) => {
//   if (typeof wordOne !== "string" || typeof wordTwo !== "string") {
//     throw new Error("Both inputs must be strings.");
//   }

//   let i = 0;
//   let j = 0;

//   while (j < wordTwo.length) {
//     if (wordOne[i] === wordTwo[j]) {
//       i++;
//     }
//     if (i === wordOne.length) {
//       return true;
//     }
//     j++;
//   }
//   return false;
// };

// isSubsequence("hello", "hello world"); // true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "abracadabra"); // true
// isSubsequence("abc", "acb"); // false (order matters)
