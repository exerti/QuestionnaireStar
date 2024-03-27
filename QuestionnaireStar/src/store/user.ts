import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
export type UserStateType= {
    name: string, // 用户名
    password: string, // 密码
}
const initialState: UserStateType = {
        name: "",
        password: "",
}


 export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginReducer(state: UserStateType, action:PayloadAction<UserStateType>){
            return action.payload
        },
        loginOutReducer: () => initialState
    }
})


export const  {loginOutReducer ,loginReducer} = UserSlice.actions 
export default UserSlice.reducer