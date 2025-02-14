const sql = require("mssql");

const config = {
  server: process.env.SERVER_NAME, // e.g. "localhost" or "MACHINE_NAME\\SQLEXPRESS"
  database: process.env.DB_NAME, // e.g. "mydatabase"
  options: {
    encrypt: true, // Use encryption (if on Azure)
    trustServerCertificate: true, // Ignore SSL for local dev
  },
  authentication: {
    type: "ntlm", // Windows Authentication (Integrated Security)
    options: {
      domain: "YosefHayim", // Your Windows domain (from 'YosefHayim\yosef')
    },
  },
};

async function connectDb() {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT SYSTEM_USER AS user_name;");
    console.log("Connected as:", result.recordset[0].user_name);
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await sql.close();
  }
}

module.exports = connectDb;
