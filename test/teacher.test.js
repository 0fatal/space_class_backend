const TeacherService = require("../service/class");

test('create teacher', async () => {
    const classInfo = {
        name: '测试班1',
        intro: '测试班1介绍',
        teacher_id: 1
    }
    expect(await TeacherService.createClass(classInfo)).toBe(true);
});