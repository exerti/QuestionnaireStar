import React,{FC, useEffect} from "react";
import useloadquestion from "../../../hooks/useloadquestion";

const Edit :FC = () => {
     const {loading , data ,error}  =  useloadquestion()
    return <>
            <p>  {loading? "loading" : JSON.stringify(data)}</p>
    </>
}

export default Edit ;