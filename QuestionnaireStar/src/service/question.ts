import  axios ,{ResType} from './axios'

// 获取问卷
export const  getQuestion = (id :Number) => {
    const  url = `/question/list/${id}`
    return  axios.get<ResType>(url)
}

//创建问卷

export const  createQuestion = (data :any) => {
 
    
}