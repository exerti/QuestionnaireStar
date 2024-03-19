import React, { useEffect, useState } from "react"; 

const useMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const handleMouseMove = (event: MouseEvent) => {
        setX(event.clientX);
        setY(event.clientY);
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    },[]
    )

    return {x,y}
}

export default useMouse;