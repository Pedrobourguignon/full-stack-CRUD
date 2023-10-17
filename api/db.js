import mysql from "mysql";
import "dotenv/config";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL: " + err.stack);
    return;
  }
  console.log("Conectado ao MySQL como ID " + db.threadId);
});
