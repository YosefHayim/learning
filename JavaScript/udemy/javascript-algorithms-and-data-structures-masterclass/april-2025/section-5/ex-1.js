// Frequency Counter - validAnagram
// Given two strings,
// write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const obj1 = {};
//   const obj2 = {};

//   for (const v of str1) {
//     if (!obj1.hasOwnProperty(v)) {
//       obj1[v] = 1;
//     } else {
//       obj1[v]++;
//     }
//   }

//   for (const v of str2) {
//     if (!obj2.hasOwnProperty(v)) {
//       obj2[v] = 1;
//     } else {
//       obj2[v]++;
//     }
//   }

//   for (const v in obj1) {
//     if (obj2[v] !== obj1[v]) {
//       console.log("false");
//       return false;
//     }
//   }

//   console.log("true");
//   return true;
// };

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)
