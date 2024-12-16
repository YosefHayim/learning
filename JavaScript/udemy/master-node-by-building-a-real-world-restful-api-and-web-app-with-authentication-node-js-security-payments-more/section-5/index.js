const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log(err);
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body);

      fs.writeFile("dog-img.txt", res.body.message, (err, data) => {
        if (err) return console.log(err);
        console.log("Random dog image saved to file!");
      });
    });
});
