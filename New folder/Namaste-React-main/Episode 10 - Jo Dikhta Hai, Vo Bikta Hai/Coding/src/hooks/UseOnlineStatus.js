import { useState, useEffect } from 'react';

const useOnlieStatus =()=>{
    const [online,setonline]=useState(true)

    useEffect(()=>{
       window.addEventListener("offline",()=>{
        setonline(false)
       })
       window.addEventListener("online",()=>{
        setonline(true)
       })
    },[])
    return online
}
export default useOnlieStatus