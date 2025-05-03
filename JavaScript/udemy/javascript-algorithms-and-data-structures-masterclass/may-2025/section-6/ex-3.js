// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// O(n)
const sameFrequency = (nums1, nums2) => {
  if (nums1.toString().length !== nums2.toString().length) {
    return false;
  }

  const obj = {};

  for (const n of nums1.toString()) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }

  for (const n of nums2.toString()) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value < 2) {
      return false;
    }
  }
  return true;
};

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
