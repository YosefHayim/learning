var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z]/g, "");

  let reverseS = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reverseS += s[i];
  }
  console.log(s);
  console.log(reverseS);
  if (reverseS === s) return true;
  return false;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("0P");
