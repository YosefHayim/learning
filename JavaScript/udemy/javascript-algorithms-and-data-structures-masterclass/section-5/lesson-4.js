// Given two strings , write a function to determine if the second string is anagram of the first.
// an anagram is a word, phrase or name formed by re-arranging the letters of another
// such as cinema , formed from iceman.

const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const freqLettersWordOne = {};
  const freqLettersWordTwo = {};

  for (let str in word1) {
    let letter = word1.charAt(str);
    if (freqLettersWordOne[letter]) {
      freqLettersWordOne[letter]++;
    } else {
      freqLettersWordOne[letter] = 1;
    }
  }

  for (let str in word2) {
    let letter = word2.charAt(str);
    if (freqLettersWordTwo[letter]) {
      freqLettersWordTwo[letter]++;
    } else {
      freqLettersWordTwo[letter] = 1;
    }
  }

  for (val in freqLettersWordOne) {
    if (freqLettersWordOne[val] !== freqLettersWordTwo[val]) {
      console.log(
        `Comparing: ${freqLettersWordOne[val]} against : ${freqLettersWordTwo[val]}`
      );
      return false;
    }
  }
  return true;
};

validAnagram("aaz", "zza");
