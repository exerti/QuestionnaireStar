
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getQuestion } from "../service/question"
import {useRequest} from 'ahooks'

const  useloadquestion = () => {
        const {id =' '} = useParams()
        // const [loading ,setLoading] =useState(true)
        // const [question ,setQuestion] =useState({})

        // useEffect(()=>{
        //     async function fn(){
        //         const  data =  await getQuestion(Number(id))
        //         setQuestion(data)
        //         setLoading(false)
        //     }
        //     fn()
        // },[])
        
        // return {loading ,question}
       async function fn(){
           const  data =  await getQuestion(Number(id))
           return data
       }
        const {loading ,data,error}   =useRequest(fn)
        
        return {loading ,data,error}
}

export default useloadquestion