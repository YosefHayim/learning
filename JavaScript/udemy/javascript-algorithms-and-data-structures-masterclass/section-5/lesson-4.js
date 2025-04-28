// Given two strings , write a function to determine if the second string is anagram of the first.
// an anagram is a word, phrase or name formed by re-arranging the letters of another
// such as cinema , formed from iceman.

// 90% correctness overall this exercise
// I did a wrong loop that could have caused bug.

// const validAnagram = (word1, word2) => {
//   if (word1.length !== word2.length) {
//     return false;
//   }

//   const freqLettersWordOne = {};
//   const freqLettersWordTwo = {};

//   for (let str of word1) {
//     if (freqLettersWordOne[str]) {
//       freqLettersWordOne[str]++;
//     } else {
//       freqLettersWordOne[str] = 1;
//     }
//   }

//   for (let str of word2) {
//     if (freqLettersWordTwo[str]) {
//       freqLettersWordTwo[str]++;
//     } else {
//       freqLettersWordTwo[str] = 1;
//     }
//   }

//   console.log(freqLettersWordOne);
//   console.log(freqLettersWordTwo);

//   for (let val in freqLettersWordOne) {
//     if (freqLettersWordOne[val] !== freqLettersWordTwo[val]) {
//       console.log(`Comparing: ${freqLettersWordOne[val]} against : ${freqLettersWordTwo[val]}`);
//       console.log("Final result is False");
//       return false;
//     }
//   }
//   console.log("Final result is True");
//   return true;
// };

// Correct solution

// const validAnagram = (word1, word2) => {
//   if (word1.length !== word2.length) {
//     return false;
//   }

//   const freqLettersWordOne = {};
//   const freqLettersWordTwo = {};

//   for (let letter of word1) {
//     freqLettersWordOne[letter] = (freqLettersWordOne[letter] || 0) + 1;
//   }

//   for (let letter of word2) {
//     freqLettersWordTwo[letter] = (freqLettersWordTwo[letter] || 0) + 1;
//   }

//   for (let val in freqLettersWordOne) {
//     if (freqLettersWordOne[val] !== freqLettersWordTwo[val]) {
//       console.log(`Comparing: ${freqLettersWordOne[val]} against : ${freqLettersWordTwo[val]}`);
//       console.log("Final result is False");
//       return false;
//     }
//   }

//   console.log("Final result is True");
//   return true;
// };
