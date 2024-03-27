import { configureStore } from "@reduxjs/toolkit";
import  Usereducer ,{ UserStateType}from "./user";

export  type StateType ={
    user: UserStateType
}

export  default configureStore({
    reducer: {
        user: Usereducer, // 用户信息
    }
})