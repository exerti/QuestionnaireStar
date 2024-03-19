// 更新的值不是最新的count值， cout是值类型的
import React,{FC, useState} from "react";

const ClosureTrap: FC = () => {
    
    const [count , setCount] =useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    function  alert(){
        setTimeout(() => {
           console.log(count)
        }, 3000);
    }

    return <>
        <p>闭包陷阱</p>
        <span>{count}</span>
        <button onClick={handleClick}>add</button>
        <button onClick={alert}>alert</button>
    </>
}

export default ClosureTrap;



// 使用useref ,useEffect 保持值的引用  
// import React,{FC, useEffect, useRef, useState} from "react";

// const ClosureTrap: FC = () => {
    
//     const [count , setCount] =useState(0)

//     const handleClick = () => {
//         setCount(count + 1)
//     }

//     function  alert(){
//         setTimeout(() => {
//            console.log(countRef.current); // 总是2
//         }, 3000);
//     }

//     const countRef = useRef(count)

//     useEffect(()=>{
//         countRef.current = count
//     },[count])

//     return <>
//         <p>闭包陷阱</p>
//         <span>{count}</span>
//         <button onClick={handleClick}>add</button>
//         <button onClick={alert}>alert</button>
//     </>
// }

// export default ClosureTrap;

