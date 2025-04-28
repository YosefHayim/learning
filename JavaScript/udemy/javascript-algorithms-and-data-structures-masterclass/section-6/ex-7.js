// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a
// target average, determine if there is a pair of values in the array where the average
// of the pair equals the target average. There may be more than one pair that matches
// the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

const averagePair = (...args) => {
  // if there is no avg or array provided throw error
  // if some of the args are not numbers

  const arr = args[0];
  const avgResult = args[1];

  // loop on the array and get the total sum

  // check if each pair within the array is equal to the avgResult

  // if match return true else return false
};

averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
