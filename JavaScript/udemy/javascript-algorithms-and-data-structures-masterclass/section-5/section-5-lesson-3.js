// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// Example: same([1, 2, 3], [4, 1, 9]) // true
// Example: same([1, 2, 3], [1, 9]) // false

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const newArr1 = arr1.map((n) => n ** 2);

  const frequencyArrOne = {};
  const frequencyArrTwo = {};

  for (n of newArr1) {
    if (!frequencyArrOne[n]) {
      frequencyArrOne[n] = 1;
    } else {
      frequencyArrOne[n]++;
    }
  }

  for (n of arr2) {
    if (!frequencyArrTwo[n]) {
      frequencyArrTwo[n] = 1;
    } else {
      frequencyArrTwo[n]++;
    }
  }

  console.log(frequencyArrOne);

  console.log(frequencyArrTwo);

  const sumOne = newArr1.reduce((acc, currentVal) => acc + currentVal, 0);
  const sumTwo = arr2.reduce((acc, currentVal) => acc + currentVal, 0);

  if (sumOne === sumTwo) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
};

same([1, 2, 3], [4, 1, 9]);
same([1, 2, 3], [1, 9]);
