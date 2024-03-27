import React, { FC, useEffect } from "react";
import useloadquestion from "../../../hooks/useloadquestion";
import style from "./index.module.scss";
import EditCanvas from "./editCanvas";
const Edit: FC = () => {
        //      const {loading , data ,error}  =  useloadquestion()
        return (
                <div className={style.container}>
                        <div className={style.header}> header</div>
                        <div className={style['content-warpper']}>
                                <div className={style.content}>
                                        <div className={style.left}>left</div>
                                        <div className={style.center}>
                                                <div className={style['canvas-warpper']}>
                                                        canvas
                                                        <div> 画布，测试滚动</div>
                                                        <EditCanvas></EditCanvas>
                                                </div>
                                        </div>
                                        <div className={style.right}>right</div>
                                </div>
                        </div>
                </div>
        )
}
export default Edit;