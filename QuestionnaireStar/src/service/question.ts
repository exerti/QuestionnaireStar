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


// 更新问卷

export async   function updateQuestion(id:number,opt :{
    [key:string]:any
}):Promise<ResType> {
    const  url = `/api/question/${id}`
    const data =   (await  axios.patch(url ,opt))  as ResType
    return  data
     
}

// 复制问卷

export async   function copyQuestion(id:number):Promise<ResType> {
    const  url = `/api/question/copy/${id}`
        
    const data =   (await  axios.post(url))  as ResType 
    
    return  data
    
}

//删除问卷

export async  function deleteQuestion(ids:string[]):Promise<ResType> {
    const  url = `/api/question`
    const data =   (await  axios.delete(url ,{data:{ids}}))  as ResType
    return  data
}