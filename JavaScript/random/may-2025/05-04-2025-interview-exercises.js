// ----------------------
// 1. twoSum(nums, target)
const twoSum = (nums, target) => {
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[j] === target) {
      console.log(`[${i},${j}]`);
      return [i, j];
    }
  }
  console.log("[]");
  return [];
};
// Find indices of the two numbers that add up to the target.
// Examples:
// twoSum([2, 7, 11, 15], 9)        //[0, 1]
// twoSum([3, 2, 4], 6)             //[1, 2]
// twoSum([3, 3], 6)                //[0, 1]
// twoSum([1, 2, 3, 4, 5], 10)      //[]

// ----------------------
// 2. isPalindrome(str)
const isPalindrome = (str) => {
  let reverseWord = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    reverseWord += letter;
  }

  if (str === reverseWord) {
    console.log("true");
    return true;
  }

  console.log("false");
  return false;
};
// Check if a string is a palindrome (case-insensitive).
// Examples:
// isPalindrome("racecar"); //true
// isPalindrome("hello"); //false
// isPalindrome("A man a plan a canal Panama"); // true
// isPalindrome("12321"); //true

// ----------------------
// 3. removeDuplicates(nums)
const removeDuplicates = (nums) => {
  const withoutDups = new Set(nums);
  return withoutDups.size;
};
// Remove duplicates from sorted array in-place. Return new length.
// Examples:
// removeDuplicates([1, 1, 2]); //2
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5
// removeDuplicates([]); //0
// removeDuplicates([1, 2, 3]); //3

// ----------------------
// 4. validParentheses(s)
const validParentheses = () => {};
// Check if parentheses are valid (balanced).
// Examples:
validParentheses("()"); //true
validParentheses("()[]{}"); //true
validParentheses("(]"); //false
validParentheses("([)]"); //false

// ----------------------
// 5. reverseLinkedList(head)
const reverseLinkedList = (head) => {
  if (head.length === 1) return head;
  else if (head.length === 0) return head;
  return head.sort((a, b) => b - a);
};
// Reverse a singly linked list.
// Examples:
// reverseLinkedList([1, 2, 3, 4, 5]); //[5,4,3,2,1]
// reverseLinkedList([1, 2]); //[2,1]
// reverseLinkedList([]); //[]
// reverseLinkedList([7]); //[7]

// ----------------------
// 6. fib(n)
const fib = (n) => {
  let total = 0;
  let j = 1;
  for (let i = 0; i < n; i++) {
    total += i + j;
  }
  console.log(total);
  return total;
};
// Return nth Fibonacci number.
// Examples:
// fib(0); //0
// fib(1); //1
// fib(5); // 15
// fib(10); //55

// ----------------------
// 7. moveZeroes(nums)

// Move all 0's to the end while maintaining the order of non-zero elements.
// Examples:
// moveZeroes([0, 1, 0, 3, 12]); //[1,3,12,0,0]
// moveZeroes([0, 0, 1]); //[1,0,0]
// moveZeroes([1, 0, 2, 0, 3]); //[1,2,3,0,0]
// moveZeroes([0]); //[0]

// function moveZeroes(nums) {}

// ----------------------
// 8. firstUniqueChar(s)
const firstUniqueChar = (s) => {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    if (v === 1) {
      return console.log(s.indexOf(k));
    }
  }
  console.log("-1");
  return -1;
};
// Return the index of the first non-repeating character.
// Examples:
// firstUniqueChar("leetcode"); //0
// firstUniqueChar("loveleetcode"); //2
// firstUniqueChar("aabb"); //-1
// firstUniqueChar("xxyz"); //2

// ----------------------
// 9. flattenArray(arr)
const flattenArray = (arr) => {
  return console.log(arr.flat(Infinity));
};
// Flatten a nested array.
// flattenArray([1, [2, 3], [4, [5]]]); // [1,2,3,4,5]
// flattenArray([]); //[]
// flattenArray([1, [2, [3, [4]]]]); //[1,2,3,4]
// flattenArray([[[[1]]]]); //[1]

// ----------------------
// 10. binarySearch(nums, target)
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      console.log(middle);
      return middle;
    }
    target < nums[middle] ? (right = middle - 1) : (left = middle + 1);
  }
  console.log("-1");
  return -1;
};
// Return index of target or -1 if not found.
// Examples:
// binarySearch([1, 2, 3, 4, 5], 4); //3
// binarySearch([1, 2, 3, 4, 5], 6); //-1
// binarySearch([], 1); //-1
// binarySearch([2, 4, 6, 8, 10], 6); //2

// function binarySearch(nums, target) {}

// ----------------------
// 11. debounce(func, delay)
const debounce = (func, delay) => {
  setTimeout(() => {
    func();
  }, delay);
};
// Returns a debounced version of the function.
// Examples:
debounce(() => console.log("Fire"), 300); // prevents immediate repeated calls
