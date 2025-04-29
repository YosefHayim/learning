// reverse
// Write a recursive function called reverse which
// accepts a string and returns a new string in reverse.

// correct 100/100
const reverse = (str) => {
  let wordReversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    wordReversed += letter;
  }
  console.log(wordReversed);
  return wordReversed;
};

reverse("awesome");
