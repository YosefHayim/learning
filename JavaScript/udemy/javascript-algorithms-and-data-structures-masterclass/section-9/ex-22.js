"use strict";

// isPalindrome
// Write a recursive function called isPalindrome which returns true if
// the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

// correct without recursion
// const isPalindrome = (str) => {
//   if (!str) return;

//   let reverseWord = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     const letter = str[i];
//     reverseWord += letter;
//   }

//   if (reverseWord === str) {
//     console.log("true");
//     return true;
//   }
//   console.log("false");
//   return false;
// };

// correct
// const isPalindrome = (str) => {
//   if (str.length <= 1) return true; // base case: empty string or single character is a palindrome
//   if (str[0] !== str[str.length - 1]) return false; // if first and last characters don't match, not a palindrome
//   return isPalindrome(str.slice(1, -1)); // recurse on the substring without first and last characters
// };

// isPalindrome("awesome"); // false
// isPalindrome("foobar"); // false
// isPalindrome("tacocat"); // true
// isPalindrome("amanaplanacanalpanama"); // true
// isPalindrome("amanaplanacanalpandemonium"); // false
