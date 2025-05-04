// ================== TASK 1 ==================
// You are given an object where the keys are country names,
// and the values are arrays of city names.
//
// Example:
const countries = {
  USA: ["New York", "Los Angeles", "Chicago"],
  Germany: ["Berlin", "Munich", "Hamburg"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Berlin"],
};
//
// Write a function that:
// 1️⃣ Logs all country names.
// 2️⃣ Logs all city names (even if repeated).
// 3️⃣ Logs a unique sorted list of all city names.
//
// Your solution should handle any object of this shape.
let uniqueCities = new Set();

for (const [key, value] of Object.entries(countries)) {
  console.log(key);
  if (Array.isArray(value)) {
    value.forEach((v) => {
      console.log(v);
      uniqueCities.add(v);
    });
  }
}
console.log(uniqueCities);

// ================== TASK 3 ==================
// Define two classes:
// 🔹 Book: has properties title (string) and pages (number).
// 🔹 Library: has a list of Book instances.
//
// Implement a method in Library that:
// - Returns the average number of pages across all books.
// - Returns 0 if the library is empty.
//
// Set up an example library with at least 3 books to test.
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
}

class Library {
  constructor(libraryOfBooks = []) {
    this.libraryOfBooks = libraryOfBooks;
  }

  getAvgPagesOfAllBooks() {
    return this.libraryOfBooks.reduce((acc, book) => acc + book.pages, 0) / this.libraryOfBooks.length;
  }
}

const book1 = new Book("title1", 40);
const book2 = new Book("title2", 50);
const book3 = new Book("title3", 60);
const library = new Library([book1, book2, book3]);

console.log("avg books page:", library.getAvgPagesOfAllBooks());

// ================== TASK 4 ==================
// Build a simple function simulating an Express POST endpoint: /notify
// The request body includes:
const notifyRequest = {
  message: "System maintenance at midnight",
  users: ["alice", "bob"],
  roles: {
    admin: ["alice", "charlie"],
    editor: ["david", "bob"],
  },
  sendToRoles: ["admin", "editor"],
};
//
// Your task:
// 1️⃣ Combine all recipients from "users" and the members of each role listed in "sendToRoles".
// 2️⃣ Ensure each recipient only appears once (no duplicates).
// 3️⃣ Print the final recipient list.
const { users, roles, sendToRoles } = notifyRequest;

const recipients = new Set(users);

sendToRoles.forEach((role) => {
  (roles[role] || []).forEach((member) => recipients.add(member));
});

// console.log(recipients);
// ================== TASK 5 ==================
// You are given an array of objects representing players, each with properties:
// - name (string)
// - scores (array of numbers)
//
// Example:
const players = [
  { name: "Player1", scores: [10, 20, 30] },
  { name: "Player2", scores: [25, 15, 5] },
  { name: "Player3", scores: [50, 60] },
];
//
// Write a function that:
// 1️⃣ Logs each player's name and their highest score.
// 2️⃣ Logs the name of the player with the highest single score overall.

const logPlayers = (arr) => {
  let highestScore = { score: 0, name: "" };

  for (const player of arr) {
    const highestPlayerScore = player.scores.sort((a, b) => a - b);
    if (highestScore.score < highestPlayerScore[highestPlayerScore.length - 1]) {
      highestScore.score = highestPlayerScore[highestPlayerScore.length - 1];
      highestScore.name = player.name;
    }
  }
  console.log(highestScore);
};

// logPlayers(players);
