// Final Score: 55/100
//  ================== TASK 1 ==================
// You are given an object where the keys are team names
// and the values are arrays of project names.
//
// Example:
const teams = {
  Frontend: ["Project A", "Project B"],
  Backend: ["Project C", "Project D", "Project A"],
  QA: ["Project E", "Project B"],
};
//
// Write a function that does the following:
// 1️⃣ Logs all team names.
// 2️⃣ Logs all project names (even if repeated).
// 3️⃣ Logs a unique list of all project names.
//
// Your solution should handle any object of this shape.
const printObjValues = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    if (Array.isArray(key[value])) {
      console.log(`this is array `);
    }
  }
};
printObjValues(teams);

// ================== TASK 3 ==================
// Define two classes:
// 🔹 Product: has properties name (string) and price (number).
// 🔹 Cart: has a list of Product instances.
//
// Implement a method in Cart that:
// - Calculates and returns the total price of all products in the cart.
//
// Set up an example cart with at least 3 products to test.
class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

const toy1 = new Product("Toy1", 100);
const toy2 = new Product("Toy2", 100);
const toy3 = new Product("Toy3", 100);
const arrOfToys = [toy1, toy2, toy3];
const totalPricesOfToys = arrOfToys.reduce((acc, toy) => acc + toy.price, 0);

// ================== TASK 4 ==================
// Build a simple Express.js POST endpoint: /broadcast
// The request body includes:
const messageRequest = {
  message: "Lunch at 1 PM",
  individuals: ["john", "jane"],
  teams: {
    design: ["john", "emma"],
    engineering: ["mike", "jane"],
  },
  sendToTeams: ["design", "engineering"],
};
//
// Your task:
// 1️⃣ Combine all recipients from "individuals" and the members of each team listed in "sendToTeams".
// 2️⃣ Ensure each recipient only gets the message once (no duplicates).
// 3️⃣ Respond with a JSON containing the final recipient list.
//
// Do NOT implement the route logic yet—just set up the endpoint and test data shape.
const simulateAppRoutePost = () => {
  let recipients = new Set();
  let teams = new Set();

  for (const [key, value] of Object.entries(messageRequest)) {
    if (key === "individuals") {
      if (!recipients.has(value)) {
        recipients.add(value);
      }
    }
  }

  for (const [key, value] of Object.entries(messageRequest)) {
    if (key === "sendToTeams") {
      if (!teams.has(key[value])) {
        teams.add(value);
      }
    }
  }

  for (const [key, value] of Object.entries(messageRequest)) {
    if (key === "teams") {
      if (teams.has(value)) {
      }
    }
  }
};

simulateAppRoutePost();
// ================== TASK 5 ==================
// You are given an array of objects representing students, each with properties:
// - name (string)
// - grades (array of numbers)
//
// Example:
const students = [
  { name: "Alice", grades: [90, 80, 70] },
  { name: "Bob", grades: [85, 95] },
  { name: "Charlie", grades: [100, 100, 90] },
];
//
// Write a function that:
const avgStudentsGrade = (arr) => {
  let highestStudentGrade = { grade: 0, studentName: "" };

  for (const student of arr) {
    const avgGrade = Math.floor(student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length);

    if (highestStudentGrade.grade < avgGrade) {
      highestStudentGrade.grade = avgGrade;
      highestStudentGrade.studentName = student.name;
    }
    console.log(`Average grades of the student: ${student.name} is: ${avgGrade}`);
  }
  console.log(`Student with the highest average: ${highestStudentGrade.studentName}`);
};
avgStudentsGrade(students);
// 1️⃣ Logs each student's name and their average grade.
// 2️⃣ Logs the name of the student with the highest average.
