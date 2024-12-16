const fs = require("fs");
const superagent = require("superagent");

// Without promises
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return console.log(err);
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       console.log(res.body);

//       fs.writeFile("dog-img.txt", res.body.message, (err, data) => {
//         if (err) return console.log(err);
//         console.log("Random dog image saved to file!");
//       });
//     });
// });

//With promises
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return console.log(err);
//   const breed = data.toString().trim(); // Ensure proper string handling
//   console.log(`Breed: ${breed}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err);
//         console.log("Random dog image saved to file!");
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });
