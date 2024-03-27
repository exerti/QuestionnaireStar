const question = require('./question');
const test = require('./test');
const user = require('./user');

const mockList = [
    ...question,
    ...test,
    ...user
]

module.exports = mockList; // 导出mock数据