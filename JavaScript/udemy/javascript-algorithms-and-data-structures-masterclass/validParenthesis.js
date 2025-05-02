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

  let noDuplicatesArr = new Set();
  for (let i = 0; i < newArr.length; i++) {
    const elVal = newArr[i].charCodeAt(0);
    for (let j = newArr.length - 1; j > 0; j--) {
      const elNextVal = newArr[j].charCodeAt(0);
      if (elVal < elNextVal) {
        noDuplicatesArr.add(elVal);
      } else {
        noDuplicatesArr.add(elNextVal);
      }
    }
  }
  console.log(noDuplicatesArr);
}

isValid("()[]{}");
isValid("(]");
isValid("([])");
