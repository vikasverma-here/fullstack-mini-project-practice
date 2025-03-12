import { toast } from "react-toastify";


export const handlesuccess = (message)=>{
    toast.success(message,{
        position:"top-right"
    })
}

export const handlerror  = (msg)=>{
    toast.error(msg,{
        position:"top-right"
    })
}