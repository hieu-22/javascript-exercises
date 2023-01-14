const mysql = require('mysql2')

// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Email123',
  database: 'nodejsbasic'
})

module.exports = pool