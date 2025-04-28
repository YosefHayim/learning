// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called,
// areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern
// OR the multiple pointers pattern.

// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// Failed , didn't understand this properly how to access all parameters being passed
// const areThereDuplicates = (arr) => {
//   // make sure we receive only numbers array
//   if (!Array.isArray(arr)) throw new Error("This is not array please provide valid array");

//   let freqObject = {};
//   // loop in the array and validate if there is more than one for each num in the array
//   for (let i = 0; i < arr.length; i++) {
//     let currentStr = arr[i];
//     if (!freqObject[currentStr]) {
//       freqObject[currentStr] = 1;
//     } else {
//       freqObject[currentStr]++;
//     }
//   }
//   console.log(freqObject);

//   // return true if duplicates and false if doesn't
//   for (const [key, value] of Object.entries(freqObject)) {
//     if (value > 1) {
//       console.log("true");
//       return true;
//     } else {
//       console.log("false");
//       return false;
//     }
//   }
// };

// areThereDuplicates([1, 2, 3]); // false
// areThereDuplicates([1, 2, 2]); // true
// areThereDuplicates(["a", "b", "c", "a"]); // true

// Correct
// const areThereDuplicates = (...args) => {
//   const freqObject = {};

//   for (const val of args) {
//     freqObject[val] = (freqObject[val] || 0) + 1;
//     if (freqObject[val] > 1) return true;
//   }
//   return false;
// };

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true
