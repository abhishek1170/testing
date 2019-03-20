import Axios from "axios";
import {socket} from "../../index"

export const CANTAINER_TYPE_Comment ={
    FetchingdataComment:"feching_data_loginComment",
    resultdataComment:"result_data_loginComment",
    resulterrorComment:"result_error_loginComment"
}

export const FetchingdataComment=()=>{
    console.log("fetching data is calling Comnment");
    return{
            type:CANTAINER_TYPE_Comment.FetchingdataComment,
            isFetchingComment:true,
            resultComment:false,
        }
}
export const resultdataComment=(dataComment,resultdataComment)=>{
    return{
            type:CANTAINER_TYPE_Comment.resultdataComment,
            isFetchingComment:false,
            resultComment:true,
            dataComment,
            resultdataComment,
    }
}
export const resulterrorComment=(errorComment)=>{
    console.log("result error is calling Commnet");
    return{
                type:CANTAINER_TYPE_Comment.resulterrorComment,
                isFetchingComment:false,
                resultComment:false,
                errorComment,
        }
}
export const uploadComment =(data)=>{
    data.time=Date.now();
    return(dispatch)=>{  
    dispatch(FetchingdataComment());    
    Axios.post("http://192.168.100.152:8080/comment",data)
    .then((res)=>{
            dispatch(resultdataComment(res.data.result,res.data.resultdata));
            if(res.data.result)
            {
               socket.emit("recComment",data);
            }   
    })
    .catch((error)=>{
        dispatch(resulterrorComment(true));
    }) 
    }
}