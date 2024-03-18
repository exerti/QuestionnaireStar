import React, { FC, useState } from "react";

import { produce } from "immer";
// npm install immer --save
//  state的值是不可变的， 使用set方法，是直接传入新的state，
// 使用immer ， 使得state的值变的可以修改
export const Immer: FC = () => {
    const [data, setData] = useState({ name: "sajad", age: 24 });
    const updateData = () => {
        setData(prev => {
            return produce(prev, draft => {
                draft.age = 30;
            }
            )
        }
        )
    }

    const [data2, setData2] = useState([1, 2, 3]);
    const updateData2 = () => {
        setData2(prev => {
            return produce(prev, draft => {
                draft.push(4);
            })
        })

    }

    return <>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <button onClick={updateData}>update</button>
        
        <h1>{data2[0]}</h1>
        <h1>{data2[1]}</h1>
        <h1>{data2[2]}</h1>
        <h1>{data2[3]}</h1>
        <button onClick={updateData2}>update</button>

    </>
}