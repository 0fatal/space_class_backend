const TeacherService = require("../service/teacher");
const {conn} = require("../db");
const MD5 = require("crypto-js/md5");

test('create teacher', async () => {
    const staffId = '400403'
    await conn('user').insert({
        staff_id: staffId,
        username: '测试老师3',
        password: MD5('123456').toString(),
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2QPhO_Uyr4zsroRQP6hIVtS2ihz5E9ouYw&usqp=CAU',
        role: 1,
        intro: '这是一个测试老师'
    })
    await conn('teacher').insert({
        staff_id: staffId,
        tendency: '人工智能'
    })
});

