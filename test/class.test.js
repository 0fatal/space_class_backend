const ClassService = require('../service/class');

test('create class', async () => {
    const classInfo = {
        name: '测试班3',
        intro: '测试班3介绍',
        teacher_id: '400403'
    }
    expect(await ClassService.createClass(classInfo)).toBe(true);
});