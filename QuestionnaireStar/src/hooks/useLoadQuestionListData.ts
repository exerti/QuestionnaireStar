import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionList } from "../service/question";

type  Searchtype ={
    isstar:boolean,
    isdelete:boolean
}

const useLoadQuestionListData = (type:Partial<Searchtype>={}) => {
    const  {isstar ,isdelete} =type 
    const [params] = useSearchParams()
    const {loading ,data ,error} = useRequest(async ()=>{
        const keyword =  params.get("keyword") || ''
        const data  = await getQuestionList( {keyword , isdelete , isstar})
        return data
    },{
        refreshDeps:[params], // 依赖params变化
    })
    
    return {loading ,data ,error}
}


export default useLoadQuestionListData;