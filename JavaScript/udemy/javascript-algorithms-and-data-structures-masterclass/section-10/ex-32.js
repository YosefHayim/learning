// Create a function that takes two strings:
// A longer string (e.g. "hellohello")
// A shorter pattern to find (e.g. "lo")
// And returns how many times the shorter pattern appears in the longer string.

// incorrect
// const stringSearch = (word, pattern) => {
//   // error handling

//   let count = 0;

//   for (let i = 0; i < word.length - 1; i++) {
//     const longLetterWord = word[i];
//     for (let j = 0; j < pattern.length - 1; j++) {
//       const shortLetterWor = pattern[j];
//       console.log(`Do they match?:${shortLetterWor} === ${longLetterWord}: ${shortLetterWor === longLetterWord}`);
//       if (shortLetterWor !== longLetterWord) {
//         break;
//       }
//     }
//     count++;
//   }
// };

// correct
// const stringSearch = (word, pattern) => {
//   let count = 0;

//   for (let i = 0; i <= word.length - pattern.length; i++) {
//     let match = true;
//     for (let j = 0; j < pattern.length; j++) {
//       if (word[i + j] !== pattern[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) count++;
//   }

//   return count;
// };

stringSearch("wowomgzomg", "omg"); // expected result: 2
// stringSearch("aaaaaa", "aa"); // expected result: 5
