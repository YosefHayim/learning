const { config } = require("dotenv");
const sql = require("mssql");
const dotenv = require("dotenv").config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: process.env.SERVER_NAME,
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // Disable encryption temporarily
    trustServerCertificate: true,
  },
  port: 1433,
};

const connectDb = async () => {
  try {
    const isConnect = await sql.connect(sqlConfig);

    if (isConnect) {
      console.log(`Successfully connected to DB: `, isConnect.config.database);
    }
  } catch (err) {
    console.error(`Error during connecting to SQL server: `, err);
  }
};

module.exports = connectDb;
