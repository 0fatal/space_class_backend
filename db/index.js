const mysql = require('mysql')
const dbConfig = require('./config')
const promisify = require('util').promisify

const db = mysql.createConnection(dbConfig)

function dbQuery(syntax, ...arg) {
    return promisify(db.query)(syntax, arg)
}

module.exports = {
    conn,
    dbQuery,
}
