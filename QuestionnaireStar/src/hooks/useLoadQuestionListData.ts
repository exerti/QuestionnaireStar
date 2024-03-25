import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionList } from "../service/question";

type  Searchtype ={
    isStar:boolean,
    isdelete:boolean,
    page:number,
    pagesize:number,
}

const useLoadQuestionListData = (type:Partial<Searchtype>={}) => {
    const  {isStar ,isdelete} =type 
    const [params] = useSearchParams()
    const page  = parseInt(params.get("page") || "1")
    const pagesize  = parseInt(params.get("pagesize") || "10")
    
    const {loading ,data ,error ,refresh} = useRequest(async ()=>{
        const keyword =  params.get("keyword") || ''
        const data  = await getQuestionList( {keyword , isdelete , isStar , page , pagesize})
        return data
    },{
        refreshDeps:[params], // 依赖params变化
    })
    
    return {loading ,data ,error ,refresh}
}


export default useLoadQuestionListData;