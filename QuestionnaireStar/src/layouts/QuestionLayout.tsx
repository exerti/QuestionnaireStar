import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const QuestionLayout: FC = () => {
    return <>
        <div>left</div>
        <div>
            <Outlet />  {/* 路由出口 */}</div>
    </>
}

export default QuestionLayout;