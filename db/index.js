const dbConfig = require('./config')
// const promisify = require('util').promisify
//
const db = require('knex')({
    client: 'mysql2',
    connection: {
        host : dbConfig.host,
        port : dbConfig.port,
        user : dbConfig.user,
        password : dbConfig.password,
        database : dbConfig.database
    }
});

console.log(db)


module.exports = {
    conn:db,
}
