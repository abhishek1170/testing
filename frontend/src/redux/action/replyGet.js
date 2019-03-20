import Axios from "axios";

export const CANTAINER_TYPE_GetReply ={
    FetchingdataGetReply:"feching_data_getReply",
    resultdataGetReply:"result_data_getReply",
    resulterrorGetReply:"result_error_getReply"
}

export const FetchingdataGetReply=()=>{
    
    console.log("fetching data is calling getReply");
    return{
            type:CANTAINER_TYPE_GetReply.FetchingdataGetReply,
            isFetchingGetReply:true,
            resultGetReply:false,
        }
}
export const resultdataGetReply=(GetReply)=>{
    console.log("result data is calling Reply",GetReply);
    return{
            type:CANTAINER_TYPE_GetReply.resultdataGetReply,
            isFetchingGetReply:false,
            resultGetReply:true,
            GetReply,
    }
}
export const resulterrorGetReply=(errorGetReply)=>{
    console.log("result error is calling Reply");
    return{
                type:CANTAINER_TYPE_GetReply.resulterrorGetReply,
                isFetchingGetReply:false,
                errorGetReply,
        }
}
export const getReply=(data)=>{
 return async function(dispatch){ 
    dispatch(FetchingdataGetReply());    
     await Axios.post("http://192.168.100.152:8080/getReply",{})
    .then((res)=>{
            dispatch(resultdataGetReply(res.data))
          })
    .catch((error)=>{
            dispatch(resultdataGetReply(error));
            })
    }            
}   
