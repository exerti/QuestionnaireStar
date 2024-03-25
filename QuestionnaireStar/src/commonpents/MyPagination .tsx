import React ,{FC, useEffect, useState} from "react"
import { Pagination} from  'antd'
import { useSearchParams , useNavigate, useLocation } from "react-router-dom"
type propsType = {
    total: number,
    page?: number,
    pagesize?: number,
}


const MyPagination = ( props :Partial<propsType>) => {
    const { total } = props
    const  [page,setPage] = useState(1)
    const  [pagesize,setPagesize] = useState(10)
    const  [searchparams] = useSearchParams()
    
    useEffect(()=>{
        const page = parseInt(searchparams.get('page')||'1')
        const pagesize = parseInt(searchparams.get('pagesize')||'10')
        setPage(page)
        setPagesize(pagesize)
    },[searchparams])
    
    const nav = useNavigate()
    const {pathname}= useLocation()
    function handleChange(page: number, pageSize: number) {
        searchparams.set('page',page.toString())
        searchparams.set('pagesize',pageSize.toString())
        
        nav({
            pathname,
            search: searchparams.toString(),
        })
    }
    return <>
     
     <Pagination total={total} current={page} pageSize={pagesize} onChange={handleChange} ></Pagination>
     
    </>
}


export default MyPagination