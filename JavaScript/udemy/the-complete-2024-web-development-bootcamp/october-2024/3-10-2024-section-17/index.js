let randomNumberOne = Math.floor(Math.random() * 6) + 1;

let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

// Do DOM for player1
let playerOneImage = document.querySelector(".img1");
playerOneImage.src = `./images/dice${randomNumberOne}.png`;

// Do DOM for player2
let playerTwoImage = document.querySelector(".img2");
playerTwoImage.src = `./images/dice${randomNumberTwo}.png`;

let h1Title = document.querySelector("h1")

// Condition for who won
if (randomNumberOne > randomNumberTwo) {
    h1Title.textContent = 'Player 1 Win!'
} else if (randomNumberOne < randomNumberTwo) {
  h1Title.textContent = 'Player 2 Win!'
} else {
  h1Title.textContent = 'Draw'
}
