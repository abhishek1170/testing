import Axios from "axios";

export const CANTAINER_TYPE_GetComment ={
    FetchingdataGetComment:"feching_data_getComment",
    resultdataGetComment:"result_data_getComment",
    resulterrorGetComment:"result_error_getComment"
}

export const FetchingdataGetComment=()=>{
    console.log("fetching data is calling getComment");
    return{
            type:CANTAINER_TYPE_GetComment.FetchingdataGetComment,
            isFetchingGetComment:true,
            resultGetComment:false,
        }
}
export const resultdataGetComment=(GetComment)=>{
    console.log("result data is calling Comment",GetComment);
    return{
            type:CANTAINER_TYPE_GetComment.resultdataGetComment,
            isFetchingGetComment:false,
            resultGetComment:true,
            GetComment,
    }
}
export const resulterrorGetComment=(errorGetComment)=>{
    console.log("result error is calling Comment");
    return{
                type:CANTAINER_TYPE_GetComment.resulterrorGetComment,
                isFetchingGetComment:false,
                resultGetComment:false,
                errorGetComment,
        }
}
export const getComment=(data)=>{
    return(dispatch)=>{  
    dispatch(FetchingdataGetComment());    
    Axios.post("http://192.168.100.152:8080/getComment",{postId:data})
    .then((res)=>{
        dispatch(resultdataGetComment(res.data));                
    })
    .catch((error)=>{
        dispatch(resulterrorGetComment("network error"));
    }) 
    }
}