const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'api-rest'
})