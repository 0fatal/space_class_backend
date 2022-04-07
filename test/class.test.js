const ClassService = require('../service/class');

jest.setTimeout(100000)
test('create class', async () => {
    const classInfo = {
        name: '测试班1',
        intro: '测试班1介绍',
        teacher_id: 1
    }
    expect(await ClassService.createClass(classInfo)).toBe(true);
});