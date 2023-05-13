const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();

// Set up a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb_node',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Define a route to handle HTTP GET requests to the root URL
app.get('/', (req, res) => {

    // var sql = "CREATE TABLE mahasiswa (nim VARCHAR(8), nama VARCHAR(20), alamat VARCHAR(20))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

  // Query the MySQL database for all rows in the "mahasiswa" table
  connection.query('SELECT * FROM mahasiswa', (error, rows, ) => {
    if (error) throw error;

     // Render the index.ejs template and pass the mahasiswa data to it
     res.render('index', { mahasiswa: rows });
  });
});

// Set up the EJS view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Start the HTTP server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
