import {  useSelector } from "react-redux";
import { UserStateType } from "../store/user";
import { StateType } from "../store";

export const useGetUserInfo = () => {
    const {name,password } = useSelector<StateType, UserStateType>(state => state.user);
    return {userName:name,password}
}