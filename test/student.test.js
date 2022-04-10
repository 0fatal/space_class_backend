const {conn} = require('../db')
const MD5 = require("crypto-js/md5");

test('new student', async() => {
    const staffId = '20051002'
    await conn('user').insert({
        staff_id: staffId,
        username: '测试同学3',
        password: MD5('123456').toString(),
        avatar: 'https://i.keaimeitu.com/uploads/allimg/200504/110822694.jpg',
        role: 0,
        intro: '这是一个测试同学'
    })
    await conn('student').insert({
        staff_id: staffId,
        class_id: '935ec03d-c9a8-425f-b39d-bef26c000629',
    })
})