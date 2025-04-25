import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [obj, setObj] = useState<T>(defaultValue)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(value => setObj(value))
    }, [url])
    return obj
}