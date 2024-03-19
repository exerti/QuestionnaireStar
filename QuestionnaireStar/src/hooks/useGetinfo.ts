import React, { useEffect, useState } from "react";

function getInfo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now().toString())
        }, 1500)
    })
}

const useGetInfo = (title: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');

    useEffect(() => {

        getInfo().then(res => {
            setLoading(false);
            setData(res);
        })

    }, [])

    return { loading, data };

}

export default useGetInfo;