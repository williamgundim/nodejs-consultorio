/**
 * Responsável pela conexão com o banco de dados.
 */

const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database: 'database'
})

module.exports =  connection;