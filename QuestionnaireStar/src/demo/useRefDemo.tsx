import React, { FC,  useRef } from "react";

//  一般用来操作DOM
//  react 提供 给开发者的 dom元素操作的接口

//
//可以传入普通的js变量， 更新不会触发rerender,
// 使用usestate， 才可以触发render

// 要和vue3的 ref 区分开


 const useRefDemo: FC = () => {
    const  inputRef = useRef<HTMLInputElement>(null)
    function select() {
        inputRef.current?.select()
        console.log(inputRef.current?.value)
    }
    return <>
        <input type="text" ref={inputRef} />
        <button onClick={select}> 选中input</button>
    </>
      }





// const useRefDemo : FC = () => {
//     const  inputRef = useRef("niaho")
//     function change() {
//         inputRef.current = "123"
//     }
//     return <>
//         <p> {inputRef.current}</p>
//         <button onClick={change}> change</button>
//     </>
// }

export default useRefDemo;