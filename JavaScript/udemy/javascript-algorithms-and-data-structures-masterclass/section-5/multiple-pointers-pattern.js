// write a function called sumZero which accepts a sorted array of integers.
// The Function should find the first pair where the sum is 0. return an array that includes
// both values that sum to 0 or undefined if a pair does not exist.

// example sumZero([-3,-2,-1,0,1,2,3]) // result is [-3,3]

const sumZero = (arr) => {
  // 1. for each index within the array sum with the next index.
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let nextN = arr[arr.length - 1];
    console.log(`Evaluate: ${n} + ${nextN} = ${n + nextN}`);
    if (n + nextN === 0) {
      console.log("Result is: ", [n, nextN]);
      return [n, nextN];
    }
  }
  // return undefined;
  // 2. first sum that gets to 0 return the result else return undefined.
};

sumZero([-3, -2, -1, 0, 1, 2, 3]);
