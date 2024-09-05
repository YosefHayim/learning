"use strict;"

// How for loop structure works:
// Iterator =  is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

// condition = of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

//iteration = Your iteration statement will tell your loop what to do with the iterator after each run.

// for (iterator; condition; iteration) {
//     logic;
//   }

// Array (rows): This array contains values (in your example, it's numbers from 0 to 7).

// Looping with for...of: When you use the for...of loop, it goes through each value in the rows array one by one.

// In the first loop, row will be 0.
// In the second loop, row will be 1.
// And so on, until it reaches the last value in the rows array.
// Manipulating result: Inside the loop, you use the row value to perform some action. In your case, you're adding the character (#) to the result string for each iteration.

// Step-by-Step Example:
const character = "#";
const count = 8;
const rows = [];

// // This fills the array with numbers from 0 to 7
for (let i = 0; i < count; i++) {
  rows.push(i);
}

let result = "";

// // Here's the for...of loop
for (const row of rows) {
  // For each value in 'rows', it adds the 'character' to 'result'
  result += character;
  console.log(result);
  
}

console.log('The final result of the for... of',result);  // This will print "########"

// What's Happening in the for...of Loop:
// In each iteration, the loop grabs the current value from the rows array and assigns it to row.
// 1st loop: row is 0, add # to result.
// 2nd loop: row is 1, add # to result.
// And so on, until all 8 values have been looped through.
// So, the loop isn't creating multiple constants. It reuses the same row variable for each value in the rows array. It just temporarily holds the current value during that specific iteration.
