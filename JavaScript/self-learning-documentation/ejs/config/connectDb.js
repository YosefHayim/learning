const sql = require("mssql");

const connectDb = async () => {
  try {
    const isConnect = await sql.connect(
      "Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true"
    );

    if (isConnect) {
      console.log(`Successfully connected to DB: `, isConnect);
    }
  } catch (err) {
    console.error(`Error durning connecting to sql server: `, err);
  }
};

module.exports = connectDb;
