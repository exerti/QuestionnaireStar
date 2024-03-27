import { createSlice,  PayloadAction} from "@reduxjs/toolkit";
import {ComponentsPropsType} from  "../../components/qsComponents/index"

export  type  componentsInfoType = {
    fe_id: string, // 一个疑问
    type: string,
    title: string,
    props: ComponentsPropsType
}

export type componentsStateType = {
    componentsList: Array<componentsInfoType>,
    //其他扩展
}

const initialState: componentsStateType = {
    componentsList: [],
}

const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
         //重置所有组件
         resetComponents: (state: componentsStateType, action : PayloadAction<componentsStateType>) => {
             return action.payload
         }
    }
})


export const { resetComponents } = componentsSlice.actions
export default componentsSlice.reducer