
import React, { useEffect  , useState, ChangeEvent} from "react";
import { useNavigate, useLocation ,useSearchParams } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;
const MySearch = () => {
     const { pathname} = useLocation();
     const navigate = useNavigate();
     const [keyword,setKeyword] = useState("")
     const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
         setKeyword(e.target.value)
     }
     const [searchParams, setSearchParams] = useSearchParams();
     function handleSearch(value: string) {
         navigate({
             pathname,
             search:`?keyword=${keyword}`
         })
     }
     useEffect(() => {
        setKeyword(searchParams.get("keyword") || "")
     },[searchParams])
    return <>

        <Search  placeholder="请输入内容" 
        size="large"
        allowClear
        style={{
            width:"300px",  
        }}
        onChange={handleChange}
        onSearch={handleSearch}
        value={keyword}
        ></Search>
        
    </>
}

export default MySearch;