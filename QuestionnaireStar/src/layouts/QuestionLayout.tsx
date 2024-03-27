import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const QuestionLayout: FC = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Outlet />  {/* 路由出口 */}
        </div>


    )

}

export default QuestionLayout;