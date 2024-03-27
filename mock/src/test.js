const Mock =require('mockjs')
const random = Mock.Random
module.exports = [
    //测试
    {
        url: '/api/test',
        method: 'get',
        response: ()=>{
            return {
                code: 200,
                msg: 'success',
                data: Mock.mock({
                    'test' : '测试'
                })

            }
        }
       
    }
]