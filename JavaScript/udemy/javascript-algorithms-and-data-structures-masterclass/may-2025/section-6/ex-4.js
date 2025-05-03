// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in.  You can solve this
// using the frequency counter pattern OR the multiple pointers pattern.

// const areThereDuplicates = (...args) => {
//   args.sort();
//   let i = 0;
//   let j = 1;
//   while (j < args.length) {
//     if (args[i] === args[j]) {
//       console.log(`true`);
//       return true;
//     }
//     i++;
//     j++;
//   }
//   console.log(`false`);
//   return false;
// };

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)
