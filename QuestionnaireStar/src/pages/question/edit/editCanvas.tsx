import React, { FC } from "react";
import styles from "./editCanvas.module.scss";


const EditCanvas: FC =  () => {
    
    


    return (
        <div className={styles.canvas}>

                <div className={styles['component-wrapper']}> 
                    <div className={styles['component']}>
                        XX组件
                    </div>
                </div>

                <div className={styles['component-wrapper']}> 
                    <div className={styles['component']}>
                        XX组件
                    </div>
                </div>
        </div>

    )
}


export default EditCanvas;