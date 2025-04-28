// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings,
// a message and some letters. The function should return true if the message
// can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// incorrect
// const constructNote = (...args) => {
//   // if args doesnt match

//   let freqObj = {};
//   let secFreqObj = {};

//   for (let i = 0; i < args[0].length; i++) {
//     const n = args[0][i];
//     freqObj[n] ? freqObj[n]++ : (freqObj[n] = 1);
//   }

//   for (let i = 0; i < args[1].length; i++) {
//     const n = args[1][i];
//     secFreqObj[n] ? secFreqObj[n]++ : (secFreqObj[n] = 1);
//   }

//   console.log(freqObj);
//   console.log(secFreqObj);

//   for (const [key, value] of Object.entries(freqObj)) {
//     console.log(`Comparing ${key} vs ${Object.keys(secFreqObj[key])}`);
//     if (key !== Object.keys(secFreqObj[key])) {
//       console.log("False");
//     } else {
//       console.log(true);
//     }
//   }
// };

// constructNote("aa", "abc"); // false
// constructNote("abc", "dcba"); // true
// constructNote("aabbcc", "bcabcaddff"); // true

const constructNote = (message, letters) => {
  const letterFreq = {};

  for (let char of letters) {
    letterFreq[char] = (letterFreq[char] || 0) + 1;
  }

  for (let char of message) {
    if (!letterFreq[char]) {
      return false;
    } else {
      letterFreq[char]--;
    }
  }

  return true;
};

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
