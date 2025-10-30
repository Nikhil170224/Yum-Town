import { useEffect,useState } from "react";

const useOnlineStatus = ()=>{
    const[onlinestatus,setOnlinestatus] = useState(true);
        useEffect(()=>{
            window.addEventListener("offline", (evt)=>{
                setOnlinestatus(false);
            })
            window.addEventListener("online", (evt)=>{
                setOnlinestatus(true);
            })
        },[])
        return onlinestatus;
}

export default useOnlineStatus;