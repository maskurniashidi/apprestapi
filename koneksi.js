var mysql = require("mysql");

//buat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw WritableStream;
  console.log("mysql terkoneksi");
});

module.exports = conn;
