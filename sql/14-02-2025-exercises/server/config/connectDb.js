const sql = require("mssql");

const connectDb = async () => {
  try {
    const connectionString =
      "Server=localhost,1433;Database=your_database;Trusted_Connection=Yes;Encrypt=true;TrustServerCertificate=true";

    await sql.connect(connectionString);
    const result = await sql.query`SELECT SYSTEM_USER AS user_name`;
    console.log("Connected as:", result.recordset[0].user_name);
  } catch (err) {
    console.error("SQL error:", err);
  }
};

module.exports = connectDb;
