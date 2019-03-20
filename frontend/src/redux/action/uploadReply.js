import Axios from "axios";
import { socket } from "../../index";

export const CANTAINER_TYPE_Reply ={
    FetchingdataReply:"feching_data_loginReply",
    resultdataReply:"result_data_loginReply",
    resulterrorReply:"result_error_loginReply",
    backToDefaultReply:"these_is_default"
}
export const backTodefault=()=>{
    return{
        type:CANTAINER_TYPE_Reply.backToDefaultReply,
        isFetchingReply:false,
        resultReply:"default",
        errorReply:false
    }
}
export const FetchingdataReply=()=>{
    console.log("fetching data is calling Comnment");
    return{
            type:CANTAINER_TYPE_Reply.FetchingdataReply,
            isFetchingReply:true,
        }
}
export const resultdataReply=(value,replyUpload)=>{
    return{
            type:CANTAINER_TYPE_Reply.resultdataReply,
            isFetchingReply:false,
            resultReply:value,
            replyUpload,
    }
}
export const resulterrorReply=(errorReply)=>{
    console.log("result error is calling Commnet");
    return{
                type:CANTAINER_TYPE_Reply.resulterrorReply,
                isFetchingReply:false,
                errorReply,
        }
}
export const uploadReply =(data)=>{
    data.time=Date.now();
    return(dispatch)=>{  
    dispatch(FetchingdataReply());    
    Axios.post("http://192.168.100.152:8080/reply",data)
    .then((res)=>{
            dispatch(resultdataReply(res.data.result,res.data.dataUpload));
            if(res.data.result)
            {
                socket.emit("recReply",res.data.dataUpload);
            }                    
    })
    .catch((error)=>{
        dispatch(resulterrorReply(true));
    }) 
    }
}