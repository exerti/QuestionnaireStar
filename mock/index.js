const koa = require('koa');
const Router = require('koa-router');
const mockList = require('./src/index');
const  cors = require('koa2-cors');
const app = new koa();
const router = new Router();

async  function getres(fn ,ctx){
    let {originalUrl =''} = ctx
     console.log(originalUrl)
      return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  res =fn(ctx)
            resolve(res)
        },1000)
     })
}

mockList.forEach((item) => {
    router[item.method](item.url, async (ctx) => {
        const res = await getres(item.response ,ctx)
        ctx.body = res;
    })
})

app.use(cors())
app.use(router.routes());



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})