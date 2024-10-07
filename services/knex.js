require('dotenv').config();
const mysql = require('mysql');

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  // You can perform database operations here
});

// Don't forget to close the connection when done
connection.end();

const knex = require('knex')({
  client: process.env.DB_TYPE,
  connection: {
    timezone: 'utc',//
    // timezone: '+05:30',//
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    // debug: process.env.KNEX_DEBUG?true:false,
    charset: 'utf8mb4'
  },
});

module.exports = {knex,connection};