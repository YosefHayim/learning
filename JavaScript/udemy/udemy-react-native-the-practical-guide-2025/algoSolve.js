function longest(str) {
  let fixedStr = "";

  if (str[0] === str[0].toUpperCase()) {
    return console.log(str.replaceAll(/[_|-]/g, ""));
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || (str[i] === "_" && i < str.length)) {
      fixedStr += "";
    } else if (str[i + 1] !== undefined) {
      fixedStr += `${str[i + 1].toUpperCase()}`;
    }
  }
  return console.log(fixedStr);
}

// longest("The_Stealth-Warrior");
longest("the-stealth-warrior");
