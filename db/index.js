const mysql = require('mysql')
const dbConfig = require('./config')
const promisify = require('util').promisify

const db = require('knex')({
    client: 'mysql',
    connection: {
        host : dbConfig.host,
        port : dbConfig.port,
        user : dbConfig.user,
        password : dbConfig.password,
        database : dbConfig.database
    }
});


module.exports = {
    conn:db,
}
