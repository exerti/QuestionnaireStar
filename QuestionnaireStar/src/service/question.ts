import  axios ,{ResType,ResponseData} from './axios'

type  SearchOpt = {
    keyword?:string,
    isStar?:boolean,
    isdelete?:boolean,
    page?:number,
    pagesize?:number
}


// 获取问卷
export async   function getQuestion(id :Number):Promise<ResType> {
    const  url = `/api/question/${id}`
   const data =   (await  axios.get(url))  as ResType
   return  data
}            

//创建问卷


export async   function createQuestion():Promise<ResType> {
    const  url = `/api/question/create`
   const data =   (await  axios.post(url))  as ResType

   return data

}

// 获取问卷列表

export async   function getQuestionList(opt: Partial<SearchOpt>={}):Promise<ResType> {
    const  url = `/api/question/list`
   const data =   (await  axios.get(url ,{params:opt}))  as ResType
   return  data
}