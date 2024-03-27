import React, { FC, useContext } from "react";

import {ThemeContext} from './index'
import { Button } from "antd";
const ThemeButton:FC = () => {
    const Theme = useContext(ThemeContext)
    const  style ={
        color:Theme.color,
        background:Theme.backgroundColor,
    }
    return   (
        <>
            <Button style={style}>context demo </Button>
        </>
    )
  
}

export default ThemeButton;