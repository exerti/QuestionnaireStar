import { configureStore } from "@reduxjs/toolkit";
import  Usereducer ,{ UserStateType}from "./user";
import  ComponentReducer,{ componentsStateType} from "./ComponentsReducer"

export  type StateType ={
    user: UserStateType,
    component: componentsStateType
}


export  default configureStore({
    reducer: {
        user: Usereducer, // 用户信息
        component: ComponentReducer, // 组件信息
    }
})