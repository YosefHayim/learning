// =============================
// 2️⃣ Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// Example:
// Input: s = "()[]{}"
// Output: true
function isValid(s) {
  const newArr = s.split("");
  const obj = {};

  for (let i = 0; i < newArr.length; i++) {
    const el = newArr[i];
  }
}

isValid("()[]{}");
isValid("(]");
