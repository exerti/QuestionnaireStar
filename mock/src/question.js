var Mock = require("mockjs");
const random = Mock.Random;

module.exports = [
  //获取问卷列表
  {
    url: "/api/question/list",
    method: "get",
    response: (ctx) => {
        
        let {originalUrl ='' ,query = {}} = ctx
        const  isdelete = originalUrl.indexOf('isdelete=true') >= 0
        const  isStar  = originalUrl.indexOf("isStar=true") >= 0
        const  pagesize = parseInt(query.pagesize || "") || 10
        const page = parseInt(query.page || "") || 1
        console.log(query)
       return {
        code: 200,
        msg: "success",
        data: Mock.mock({
           "list|10" : [
            {
              id: "@id",
              title: "@ctitle(3, 10)",
              desc: "@cparagraph(1, 3)",
              ispublished: "@boolean",
              isStar ,
              aswerCount: "@integer(1, 100)",
              createAt: "@datetime('yyyy-MM-dd HH:mm:ss')",
              isdelete
            },
          ],total: 100,
        }),
      };
    },
  },

  //获取问卷详情
  {
    url: "/api/question/detail",
    method: "get",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data: Mock.mock({
          "id|+1": 1,
          title: "@ctitle(5, 10)",
          desc: "@cparagraph(1, 3)",
          createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
        }),
      };
    },
  },
  //获取单个问卷
  {
    url: "/api/question/:id",
    method: "get",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data: {
          componentList:[
            {
              id: random.id(),
              componentType: "title",
              title:"标题",
              props:{
                text:"这是一个标题",
                level:1,
                isCenter:false
              }
            },
            {
              id: random.id(),
              componentType: "input",
              title:"输入框1",
              props:{
                text:"你的名字",
                placeholder:"请输入文本"
              }
            },{
              id: random.id(),
              componentType: "radio",
              title:"单选",
              props:{
                options:["选项1","选项2","选项3"],
                placeholder:"请选择"
        
              }
            }
          ]
        }
      };
    },
  },
  //创建问卷
  {
    url: "/api/question/create",
    method: "post",
    response: () => {
            return {
                code: 200,
                msg: "success",
                data: Mock.mock({
                    "id|+1": 1,
    
                }),
            };
    }
  },
  //更新问卷
  {
    url: "/api/question/:id",
    method: "patch",
    response: () => {
            return {
                code: 200,
                msg: "success",
                data: "已更新"
              
            }
    }
  },
  //复制问卷
  {
    url: "/api/question/copy/:id",
    method: "post",
    response: () => {
            return {
                code: 200,
                msg: "success",
                data : {
                  id : random.id()
                }
    }
  }}
  ,
  //删除问卷
{
  url: "/api/question",
  method: "delete",
  response: () => {
          return {
              code: 200,
              msg: "删除成功",
             
  }
}}
];
