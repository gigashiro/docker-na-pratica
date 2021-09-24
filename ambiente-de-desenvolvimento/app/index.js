const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_HOST,
} = process.env

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: 'root',
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});
