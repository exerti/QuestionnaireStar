var Mock = require("mockjs");
const random = Mock.Random;

module.exports = [

    //获取用户详情
    {
        url: "/api/user/detail",
        method: "get",
        response: () => {
            return {

                code: 200,
                msg: "success",
                data: Mock.mock({
                    "userName": "@cname",
                    "userId": "@id",
                    "userPhone": "@phone",
                    "userEmail": "@email",
                    "userSex": "@integer(1,2)",
                    "userBirthday": "@date('yyyy-MM-dd')",
                    "userimage": "@image('200x200', '#000', '#fff', 'avatar')",
                })


            }
        }
    }
    ,
    //登录
    {
        url: "/api/user/login",
        method: "post",
        response: () => {
            return {
                code: 200,
                msg: "success",
                data: Mock.mock({
                    token: random.word(20)
                })

            }
        }
    },
    //注册
    {
        url: "/api/user/register",
        method: "post",
        response: () => {
            return {
                code: 200,
                msg: "success",
                data: Mock.mock({
                    "userName": "@cname",
                    "userId": "@id",
                })
            }
        }
    },
    //获取验证码
    {
        url: "/api/user/getCaptha",
        method: "get",
        response: () => {
            return {
                code: 200,
                msg: "success",
                data: Mock.mock({
                    captcha: "@image('200x200', '#000', '#fff', 'captcha')",
            })
        }
    }
}
]
