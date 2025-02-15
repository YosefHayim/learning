const sql = require("mssql");

const sqlConfig = {
  user: "sa",
  password: "MichelleK2",
  server: "localhost",
  database: "StackOverflowMini",
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
