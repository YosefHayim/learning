import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const isWebsiteUrl = async () => {
  try {
    const answer = await inquirer.prompt([
      {
        name: "url",
        message: "What is the website you want to generate a QR code for?",
      },
    ]);

    console.log(`Answer is: ${answer.url}`);
    return answer.url;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};

const convertToQrImage = async () => {
  const url = await isWebsiteUrl();
  if (url) {
    const qrSvg = qr.image(url, { type: "png" });
    qrSvg.pipe(fs.createWriteStream("qrcode.png"));
    console.log("QR code image created as 'qrcode.png'");
  }
};

convertToQrImage();
