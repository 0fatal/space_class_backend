const { dbQuery } = require('../db')

async function findUserByStaffID(staffID) {
    try {
        return await dbQuery('SELECT * FROM user WHERE staffID = ?', staffID)
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = {
    findUserByStaffID,
}
