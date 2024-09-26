const mysql = require('mysql2');

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'musicdb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
});

module.exports = db;
