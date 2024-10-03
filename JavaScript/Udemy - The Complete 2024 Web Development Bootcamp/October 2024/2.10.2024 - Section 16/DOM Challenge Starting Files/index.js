let thirdLi = document.querySelectorAll('ul li')[2];
thirdLi.textContent = 'This has been changed';

let buttonClickMe = document.querySelector("button");
buttonClickMe.style.backgroundColor = "yellow"

let titleHello = document.querySelector("h1");

titleHello.classList = "huge"

// Makes this CSS property on
// titleHello.classList.toggle("huge")

// Re-calling it makes it off
// titleHello.classList.toggle("huge")